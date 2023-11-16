from models.census import Census
from models.rentalrate import RentalRate
from models.laborfte import LaborFTE
import pandas as pd
from data.personnel import staffing_patterns
import ast
import sys
import time

def main():
    # Set initial parameters
    start_time = time.time()
    start_date = '2023-07-01'
    input_deps = pd.read_csv('senior_care/data/housing_data.csv', index_col='Type')
    total_units_input = input_deps['Total Units']
    occupied_units_input = input_deps['Occupied Units']
    occupancy_cap_input = input_deps['Occupancy Cap']
    second_person_percentage_input = input_deps["Second Person Percentage"]
    base_rates = input_deps['Base Rates']
    inflation_rates_input = input_deps['Inflation Rates']
    concession_rates_input = input_deps['Concession Rates']

    census_types = ['IL', 'AL', 'MC']
    censuses = {ctype: Census(start_date, total_units_input[ctype],
                              occupied_units_input[ctype],
                              occupancy_cap_input[ctype],
                              second_person_percentage_input[ctype], ctype)
                for ctype in census_types}

    rental_rates = {ptype: RentalRate(base_rate, start_date,
                                      inflation_rates_input[ptype],
                                      concession_rates_input[ptype])
                    for ptype, base_rate in base_rates.items()}

    labor_fte = LaborFTE(start_date, censuses, staffing_patterns)

    for rental_rate in rental_rates.values():
        rental_rate.populate_rate_projection()

    labor_fte.populate_fte_projection()

    # Combine all projections into single DataFrames
    all_occupancy_projections = pd.concat([c.get_projection().assign(
        census_type=ctype) for ctype, c in censuses.items()], ignore_index=True)

    all_rate_projections = pd.concat([r.get_rate_projection().assign(
        census_type=ptype) for ptype, r in rental_rates.items()], ignore_index=True)

    all_fte_projections = labor_fte.get_fte_projection()

    # Save projections to CSV files
    out_dir = 'senior_care/projections/'
    all_occupancy_projections.to_csv(
        out_dir + "all_occupancy_projections.csv", index=False)
    all_rate_projections.to_csv(
        out_dir +
        "all_rate_projections.csv",
        index=False)
    all_fte_projections.to_csv(
        out_dir +
        "all_fte_projections.csv",
        index=False)
    
    end_time = time.time()
    print(end_time-start_time)


if __name__ == '__main__':
    main()
