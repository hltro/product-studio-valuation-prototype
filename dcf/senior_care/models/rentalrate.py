import pandas as pd
from pandas.tseries.offsets import DateOffset
import numpy as np
import sys
import ast

class RentalRate:
    def __init__(
            self,
            base_rate,
            start_date,
            inflation_rates,
            concession_rates):
        self.base_rate = base_rate
        self.start_date = pd.to_datetime(start_date)
        self.inflation_rates = ast.literal_eval(inflation_rates)
        self.concession_rates = ast.literal_eval(concession_rates)
        self.rate_projection = self._create_empty_rate_projection()

    def _create_empty_rate_projection(self):
        """Create an empty DataFrame with DateTimeIndex."""
        projection = pd.DataFrame(
            index=pd.date_range(
                self.start_date,
                self.start_date +
                DateOffset(
                    years=len(
                        self.inflation_rates)),
                freq='MS'))
        projection['numeric_month'] = range(1, len(projection) + 1)
        projection['calendar_month'] = projection.index.to_series(
        ).dt.strftime('%Y-%m-%d')
        projection['rate'] = 0.0
        return projection

    def populate_rate_projection(self):
        """Populate the DataFrame with projected rates."""
        for year in range(len(self.inflation_rates) + 1):
            year_index = self.start_date.year + year
            rate_index = self.rate_projection.index.year == year_index

            if year == 0:
                # Set base rate for the first year
                self.rate_projection.loc[rate_index, 'rate'] = self.base_rate
            else:
                # Calculate new rate based on inflation
                prev_year_index = year_index - 1
                prev_rate_index = self.rate_projection.index.year == prev_year_index
                previous_rate = self.rate_projection.loc[prev_rate_index,
                                                         'rate'].iloc[0]
                inflation_rate = self.inflation_rates[year - 1]
                new_rate = previous_rate * (1 + inflation_rate)
                self.rate_projection.loc[rate_index, 'rate'] = new_rate

    def get_rate_projection(self):
        return self.rate_projection
