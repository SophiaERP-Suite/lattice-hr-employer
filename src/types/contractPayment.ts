
export interface PaymentVerificationResponse {
  statusCode: number;
  message: string;
  data?: {
    contractId: number;
    paymentStatus: string;
    amount: number;
    currency: string;
    reference: string;
    verifiedAt: string;
  };
}