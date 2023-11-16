import pandas as pd
from pandas.tseries.offsets import DateOffset
import numpy as np

class Census:
    def __init__(self, start_date, total_units, occupied_units,
                 occupancy_cap, second_person_percentage, census_type):
        self.start_date = pd.to_datetime(start_date)
        self.total_units = total_units
        self.occupied_units = occupied_units
        self.occupancy_cap = occupancy_cap
        self.second_person_percentage = second_person_percentage
        self.census_type = census_type
        self.projection = self._calc_projection()

    def _calc_projection(self):
        months = 120  # 10 years = 120 months
        index = pd.date_range(
            self.start_date, 
            self.start_date + DateOffset(months=119), 
            freq='MS'
        )
        projection = pd.DataFrame(index=index)
        projection['numeric_month'] = np.arange(1, months + 1)
        projection['calendar_month'] = projection.index.strftime('%Y-%m-%d')
        projection['census_type'] = self.census_type
        projection = projection.assign(
            occupied_units=self.occupied_units,
            vacant_units=self.total_units - self.occupied_units,
            resident_count=np.round(
                self.occupied_units * (1 + self.second_person_percentage)
            ),
            reached_occupancy_cap=self.occupied_units >= np.round(
                self.total_units * self.occupancy_cap
            ),
            occupancy_rate=self.occupied_units / self.total_units
        )
        return self._populate_projection(projection)

    def _populate_projection(self, projection):
        for month in range(1, len(projection)):
            prev_occupied = projection.iloc[month-1]['occupied_units']
            new_occupied = min(
                np.round(prev_occupied + 1),
                np.round(self.total_units * self.occupancy_cap)
            )
            projection.iloc[month] = self._get_monthly_values(new_occupied)
        months = 120
        projection['numeric_month'] = np.arange(1, months + 1)
        projection['calendar_month'] = projection.index.strftime('%Y-%m-%d')
        return projection

    def _get_monthly_values(self, occupied_units):
        return {
            'occupied_units': occupied_units,
            'vacant_units': self.total_units - occupied_units,
            'resident_count': np.round(occupied_units * 
                                       (1 + self.second_person_percentage)),
            'reached_occupancy_cap': occupied_units >= np.round(
                self.total_units * self.occupancy_cap),
            'occupancy_rate': occupied_units / self.total_units
        }

    def get_projection(self):
        return self.projection
