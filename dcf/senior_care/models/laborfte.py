import pandas as pd
from pandas.tseries.offsets import DateOffset
import numpy as np

class LaborFTE:
    def __init__(self, start_date, censuses, staffing_patterns):
        self.start_date = pd.to_datetime(start_date)
        self.censuses = censuses  # {census_type: Census object}
        self.staffing_patterns = staffing_patterns  # {role: staffing_pattern}
        self.fte_projection = self._create_empty_fte_projection()

    def _create_empty_fte_projection(self):
        """Create an empty DataFrame with DateTimeIndex."""
        index = pd.date_range(
            self.start_date,
            self.start_date + DateOffset(months=119),
            freq='MS'
        )
        projection = pd.DataFrame(index=index)
        projection['numeric_month'] = np.arange(1, len(projection) + 1)
        projection['calendar_month'] = projection.index.strftime('%Y-%m-%d')
        for role in self.staffing_patterns:
            projection[role] = 0.0
        return projection

    def _calculate_role_fte(self, pattern, month_index):
        if pattern['type'] == 'fixed' and pattern['trigger']:
            trigger = pattern['trigger']
            occupied_units = sum(
                self.censuses[census_type].get_projection().loc[month_index, 'occupied_units']
                for census_type in trigger.get('ratio_based_on', [])
            )
            return (pattern['minimum_FTE'] + trigger['change_in_FTE']
                    if occupied_units >= trigger['value'] else pattern['minimum_FTE'])

        elif pattern['type'] == 'ratio':
            occupied_units = sum(
                self.censuses[census_type].get_projection().loc[month_index, 'occupied_units']
                for census_type in pattern['ratio_based_on']
            )
            return occupied_units / pattern['minimum_FTE']

        return pattern['minimum_FTE']

    def populate_fte_projection(self):
        """Populate the DataFrame with projected FTEs."""
        for month_index in self.fte_projection.index:
            for role, pattern in self.staffing_patterns.items():
                fte_value = self._calculate_role_fte(pattern, month_index)
                self.fte_projection.at[month_index, role] = fte_value

    def get_fte_projection(self):
        return self.fte_projection
