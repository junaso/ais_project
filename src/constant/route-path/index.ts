const OPERATION = {
  MONITORING: {
    IMBALANCE: '/operation/monitoring/imbalance',
    IMBALANCE_PV: '/operation/monitoring/imbalance-pv',
    DEVICE_STATUS: '/operation/monitoring/device-status',
    POWER_SHORTAGE: '/operation/monitoring/power-shortage',
    RENEWABLE_ENERGY_ACHIEVEMENT: '/operation/monitoring/renewable-energy-achievement',
    CEMS_STATUS: '/operation/monitoring/cems-status',
    ALERT_HISTORY: '/operation/monitoring/alert-history',
  },
  SETTING: {
    DEVICE: {
      BUILDING: '/operation/setting/device/building',
      BATTERY: '/operation/setting/device/battery',
      FC: '/operation/setting/device/fc',
      HBVPP: '/operation/setting/device/hbvpp',
      PVPCS: '/operation/setting/device/pvpcs',
      XEVVPP: '/operation/setting/device/xevvpp',
    },
    DEVICE_SETTING: {
      FC: '/operation/setting/device-setting/fc',
      BATTERY: '/operation/setting/device-setting/battery',
      PVPCS: '/operation/setting/device-setting/pvpcs',
    },
    CEMS_SYSTEM_SETTING: '/operation/setting/cems-system-setting',
    CONTRACT_INFO: '/operation/setting/contract-info',
    CALENDAR: '/operation/setting/calendar',
  },
  PLANNING: {
    DEMAND_FORECAST_OF_EQUIPMENT: '/operation/planning/demand-forecast-of-equipment',
    PV_FORECAST: '/operation/planning/pv-forecast',
    JEPX_PRICE_FORECAST_SETTING: '/operation/planning/jepx-price-forecast-setting',
    IMBALANCE_PRICE_FORECAST: '/operation/planning/imbalance-price-forecast',
    OPERATING_CONDITIONS: '/operation/planning/operating-conditions',
    RESTRICTION_PRESET: '/operation/planning/restriction-preset',
  },
}

const PAGES = {
  SAMPLE_PAGE: '/sample-page',
  SAMPLE_TABLE: '/sample-table',
  SAMPLE_FORM: '/sample-form',
}

const TOOLS = {
  BUSINESS: {
    NOTIFICATION_FORM_DL_UL: '/tools/business/notification-form-dl-ul',
    CONTRACT_RESULTS_IN_THE_SUPPLY_DEMAND_BALANCE_MARKET: '/tools/business/contract-results-in-the-supply-demand-balance-market',
    REFERENCE_VALUE_PLANNING: '/tools/business/reference-value-planning',
    JEPX_PRICE_FORECAST: '/tools/business/jepx-price-forecast',
    JEPX_EXECUTION_RESULTS: '/tools/business/jepx-execution-results',
    POWER_TRADING_CLEARING: '/tools/business/power-trading-clearing',
    ACHIEVEMENT_OF_CO2_TARGET: '/tools/business/achievement-of-co2-target',
    CERTIFICATE_AND_CREDIT_REGISTRATION: '/tools/business/certificate-and-credit-registration',
    GREENHOUSE_GAS: '/tools/business/greenhouse-gas',
    CRUDE_OIL_EQUIVALENT_ENERGY: '/tools/business/crude-oil-equivalent-energy',
  },
  DEVELOP: {
    MEASUREMENT_DATA_ACQUISITION_CONDITION: '/tools/develop/measurement-data-acquisition-condition',
    DEVIATIONS_FROM_FORECAST: '/tools/develop/deviations-from-forecast',
    SHORT_TERM_SIMULATION: '/tools/develop/short-term-simulation',
    LONG_TERM_SIMULATION: '/tools/develop/long-term-simulation',
  },
}

export const ROUTE = {
  OPERATION,
  PAGES,
  TOOLS,
}
