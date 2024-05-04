export type PhysicalAsset = {
  id: number
  name: string
  purchase_value: string
  sell_value: string
  purchase_date: string
  sell_date: string
  depreciation_percent: string
  depreciation_percent_per_year: string
  init_dep: number | null
  depreciation_frequency: number
  market_value: string
  user: number
  type: number
  tags: []
}

export type AssetsType = 'cash' | 'account' | 'mutual_funds' | 'gold' | 'real_estate' | 'physical_assets'

export type Liability = {
  id: number
  balance: string
  closure_charges: string
  disbursement_date: string
  emi: string
  emi_day: string
  interest_rate: string
  name: string
  principal: string
  tenure: number
  user: number
}

export type LoanTransaction = {
  id: number
  amount: number
  loan: number
  time: string
  type: number
  user: number
  user_remark: string
}

// ** Cash Assets Type

export type AddPhysicalAssetTypeSchema = {
  type: AssetsType
}

export type CashAssets = {
  name: string
  balance: number
  id: number
}

export type MutualFunds = {
  id: number
  name: string
  isin: string
  investment_type: string
  current_nav: string | null
}
export type SecurityTransaction = {
  id: number
  type: string
  value: number
  quantity: number
  transaction_date: string
  security_type: number
  security_object_id: number
}
