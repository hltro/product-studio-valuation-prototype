staffing_patterns = {
    "Director of Sales & Marketing": {
        "short_hand": "DSM",
        "type": "fixed",
        "ratio_based_on": None,
        "department": "Sales and Marketing",
        "is_hourly": False,
        "minimum_FTE": 1,
        "change_in_FTE": None,
        "trigger": None,
        "maximum_FTE": 999,
        "shifts_ratio": {"AM": None, "PM": None, "NOC": None},
    },
    "Sales Manager": {
        "short_hand": "SM",
        "type": "fixed",
        "ratio_based_on": None,
        "department": "Sales and Marketing",
        "is_hourly": True,
        "minimum_FTE": 1,
        "change_in_FTE": -1,
        "trigger": {"type": "occupancy", "value": 0.8},
        "maximum_FTE": 999,
        "shifts_ratio": {"AM": None, "PM": None, "NOC": None},
    },
    "Commissions": {
        "short_hand": "Commission",
        "type": "fixed",
        "ratio_based_on": None,
        "department": "Sales and Marketing",
        "is_hourly": True,
        "minimum_FTE": 0,
        "change_in_FTE": None,
        "trigger": None,
        "maximum_FTE": 999,
        "shifts_ratio": {"AM": None, "PM": None, "NOC": None},
    },
    "Director of Engagement": {
        "short_hand": "DE",
        "type": "fixed",
        "ratio_based_on": None,
        "department": "Program",
        "is_hourly": False,
        "minimum_FTE": 1,
        "change_in_FTE": None,
        "trigger": None,
        "maximum_FTE": 999,
        "shifts_ratio": {"AM": None, "PM": None, "NOC": None},
    },
    "Driver": {
        "short_hand": "Driver",
        "type": "fixed",
        "ratio_based_on": None,
        "department": "Program",
        "is_hourly": True,
        "minimum_FTE": 1.4,
        "change_in_FTE": None,
        "trigger": None,
        "maximum_FTE": 999,
        "shifts_ratio": {"AM": None, "PM": None, "NOC": None},
    },
    "Engagement Associate": {
        "short_hand": "EA",
        "type": "fixed",
        "ratio_based_on": None,
        "department": "Program",
        "is_hourly": True,
        "minimum_FTE": 0,
        "change_in_FTE": 1,
        "trigger": {"type": "occupancy", "value": 0.6},
        "maximum_FTE": 999,
        "shifts_ratio": {"AM": None, "PM": None, "NOC": None},
    },
    "Executive Director": {
        "short_hand": "ED",
        "type": "fixed",
        "ratio_based_on": None,
        "department": "Operations",
        "is_hourly": False,
        "minimum_FTE": 1,
        "change_in_FTE": None,
        "trigger": None,
        "maximum_FTE": 999,
        "shifts_ratio": {"AM": None, "PM": None, "NOC": None},
    },
    "Business Office Director": {
        "short_hand": "BOD",
        "type": "fixed",
        "ratio_based_on": None,
        "department": "Operations",
        "is_hourly": False,
        "minimum_FTE": 1,
        "change_in_FTE": None,
        "trigger": None,
        "maximum_FTE": 999,
        "shifts_ratio": {"AM": None, "PM": None, "NOC": None},
    },
    "Concierge": {
        "short_hand": "Concierge",
        "type": "fixed",
        "ratio_based_on": None,
        "department": "Operations",
        "is_hourly": True,
        "minimum_FTE": 2.1,
        "change_in_FTE": None,
        "trigger": None,
        "maximum_FTE": 999,
        "shifts_ratio": {"AM": None, "PM": None, "NOC": None},
    },
    "Director of Memory Care": {
        "short_hand": "DOV",
        "type": "fixed",
        "ratio_based_on": None,
        "department": "Memory Care",
        "is_hourly": False,
        "minimum_FTE": 1,
        "change_in_FTE": None,
        "trigger": None,
        "maximum_FTE": 999,
        "shifts_ratio": {"AM": None, "PM": None, "NOC": None},
    },
    "MC Care Manager": {
        "short_hand": "MCCNA",
        "type": "ratio",
        "ratio_based_on": ["MC","AL"],
        "department": "Memory Care",
        "is_hourly": True,
        "minimum_FTE": 4.2,
        "change_in_FTE": 1.4,
        "trigger": None,
        "maximum_FTE": 999,
        "shifts_ratio": {"AM": 10, "PM": 10, "NOC": 20},
    },
    "MC Medication Care Manager": {
        "short_hand": "MCCMA",
        "type": "ratio",
        "ratio_based_on": ["MC"],
        "department": "Memory Care",
        "is_hourly": True,
        "minimum_FTE": 2.8,
        "change_in_FTE": 1.4,
        "trigger": None,
        "maximum_FTE": 4.2,
        "shifts_ratio": {"AM": 18, "PM": 18, "NOC": None},
    },
    "Director of Plant Operations": {
        "short_hand": "DPO",
        "type": "fixed",
        "ratio_based_on": None,
        "department": "Maintenance",
        "is_hourly": True,
        "minimum_FTE": 1,
        "change_in_FTE": None,
        "trigger": None,
        "maximum_FTE": 999,
        "shifts_ratio": {"AM": None, "PM": None, "NOC": None},
    },
    "Plant Operations Assistant": {
        "short_hand": "PlantOps",
        "type": "fixed",
        "ratio_based_on": None,
        "department": "Maintenance",
        "is_hourly": True,
        "minimum_FTE": 0.5,
        "change_in_FTE": None,
        "trigger": None,
        "maximum_FTE": 999,
        "shifts_ratio": {"AM": None, "PM": None, "NOC": None},
    },
    "Director of Housekeeping": {
        "short_hand": "DOH",
        "type": "fixed",
        "ratio_based_on": None,
        "department": "Housekeeping",
        "is_hourly": True,
        "minimum_FTE": 0,
        "change_in_FTE": None,
        "trigger": None,
        "maximum_FTE": 999,
        "shifts_ratio": {"AM": None, "PM": None, "NOC": None},
    },
    "Housekeeping Associate": {
        "short_hand": "Housekeeper",
        "type": "fixed",
        "ratio_based_on": None,
        "department": "Housekeeping",
        "is_hourly": True,
        "minimum_FTE": 1.4,
        "change_in_FTE": 1,
        "trigger": {"type": "occupied units", "value": 40},
        "maximum_FTE": 999,
        "shifts_ratio": {"AM": None, "PM": None, "NOC": None},
    },
    "Director of Culinary Services": {
        "short_hand": "DOC",
        "type": "fixed",
        "ratio_based_on": None,
        "department": "Dining",
        "is_hourly": False,
        "minimum_FTE": 1,
        "change_in_FTE": None,
        "trigger": None,
        "maximum_FTE": 999,
        "shifts_ratio": {"AM": None, "PM": None, "NOC": None},
    },
    "Chef": {
        "short_hand": "Chef",
        "type": "fixed",
        "ratio_based_on": None,
        "department": "Dining",
        "is_hourly": True,
        "minimum_FTE": 2.9,
        "change_in_FTE": 1,
        "trigger": {"type": "occupied units", "value": 80},
        "maximum_FTE": 999,
        "shifts_ratio": {"AM": None, "PM": None, "NOC": None},
    },
    "Dining Room Associate": {
        "short_hand": "DM",
        "type": "ratio",
        "ratio_based_on": ["IL", "AL", "MC"],
        "department": "Dining",
        "is_hourly": True,
        "minimum_FTE": 4.9,
        "change_in_FTE": None,
        "trigger": None,
        "maximum_FTE": 999,
        "shifts_ratio": {"AM": 20, "PM": None, "NOC": None},
    },
    "Dish Washer": {
        "short_hand": "Washer",
        "type": "fixed",
        "ratio_based_on": None,
        "department": "Dining",
        "is_hourly": True,
        "minimum_FTE": 2,
        "change_in_FTE": None,
        "trigger": None,
        "maximum_FTE": 999,
        "shifts_ratio": {"AM": None, "PM": None, "NOC": None},
    },
    "MC Attendant": {
        "short_hand": "MCDM",
        "type": "fixed",
        "ratio_based_on": None,
        "department": "Dining",
        "is_hourly": True,
        "minimum_FTE": 1.4,
        "change_in_FTE": None,
        "trigger": None,
        "maximum_FTE": 999,
        "shifts_ratio": {"AM": None, "PM": None, "NOC": None},
    },
    "Director of Health & Wellness": {
        "short_hand": "DHW",
        "type": "fixed",
        "ratio_based_on": None,
        "department": "Care",
        "is_hourly": False,
        "minimum_FTE": 1,
        "change_in_FTE": None,
        "trigger": None,
        "maximum_FTE": 999,
        "shifts_ratio": {"AM": None, "PM": None, "NOC": None},
    },
    "LPN": {
        "short_hand": "LPN",
        "type": "ratio",
        "ratio_based_on": ["AL","MC"],
        "department": "Care",
        "is_hourly": True,
        "minimum_FTE": 2.1,
        "change_in_FTE": None,
        "trigger": None,
        "maximum_FTE": 4.2,
        "shifts_ratio": {"AM": 50, "PM": None, "NOC": None},
    },
    "Medication Care Manager": {
        "short_hand": "CMA",
        "type": "ratio",
        "ratio_based_on": ["AL"],
        "department": "Care",
        "is_hourly": True,
        "minimum_FTE": 2.8,
        "change_in_FTE": None,
        "trigger": {"type": "occupied units", "value": 20},
        "maximum_FTE": 999,
        "shifts_ratio": {"AM": 30, "PM": 30, "NOC": None},
    },
    "Care Manager": {
        "short_hand": "CNA",
        "type": "ratio",
        "ratio_based_on": ["AL"],
        "department": "Care",
        "is_hourly": True,
        "minimum_FTE": 4.2,
        "change_in_FTE": None,
        "trigger": None,
        "maximum_FTE": 999,
        "shifts_ratio": {"AM": 18, "PM": 18, "NOC": 36},
    }
}
