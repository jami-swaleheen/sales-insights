export interface SaleRecord {
  name: string;
  email: string;
  product: string;
  category: string;
  amount: number;
  date: string;
  state: string;
}

export interface SalesInsights {
  bestPerformingCategory: {
    category: string;
    totalSales: number;
  };
  totalSales: number;
  averageTransactionValue: number;
  salesByCategory: {
    [key: string]: number;
  };
  customerMetrics: {
    totalCustomers: number;
    repeatCustomers: number;
  };
  aiSummary: string;
}

export interface ErrorResponse {
  message: string;
  status: number;
} 