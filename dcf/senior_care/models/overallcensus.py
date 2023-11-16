import pandas as pd

class OverallCensus:
    def __init__(self, censuses):
        """Initialize with a dictionary of Census objects."""
        self.censuses = censuses

    def calculate_overall_occupancy_rate(self):
        """Calculate and return the overall occupancy rate."""
        # Assuming all Census objects have the same index
        index = next(iter(self.censuses.values())).projection.index
        overall = pd.DataFrame(index=index)

        # Vectorized computation of total occupied units
        total_occupied = pd.concat([c.projection['occupied_units']
                                    for c in self.censuses.values()], axis=1).sum(axis=1)
        total_units = sum(c.total_units for c in self.censuses.values())

        # Calculate overall occupancy rate
        overall['rate'] = total_occupied / total_units

        return overall