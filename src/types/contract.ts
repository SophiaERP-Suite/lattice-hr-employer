export interface ResponsibilitiesData {
  typeId: number;
  typeName: string
  handler: string;
}

export interface ContractData {
  contractId: number;
  content: string;
  currency: string;
  amount: number;
  expiryDate: string;
  employer: string;
  employerLogo: string;
  employerMail: string;
  employerPhone: string;
  dateCreated: string;
  signatureURL: string;
  contractURL: string;
  contractName: string;
  signed: boolean;
  responsibilities: ResponsibilitiesData[];
}

export interface ResponsibilityTypeFormData {
  TypeId: string;
  Handler: string;
}

export interface ContractFormData {
  Content: string;
  Amount: string;
  Currency: string;
  ExpiryDate: string;
  Responsibilities: ResponsibilityTypeFormData[];
}

export interface CurrencyData {
  currencyId: number;
  name: string;
  code: string;
  symbol: string;
  isActive: boolean;
  dateCreated: string;
}

export interface ResponsibilityTypeData {
  typeId: number;
  isEnabled: boolean;
  typeName: string;
}