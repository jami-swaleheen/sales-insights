import { SaleRecord, SalesInsights } from '../types';

export class SalesService {
  calculateInsights(sales: SaleRecord[]): Omit<SalesInsights, 'aiSummary'> {
    // Calculate total sales
    const totalSales = sales.reduce((sum, sale) => sum + sale.amount, 0);

    // Calculate sales by category
    const salesByCategory = sales.reduce((acc, sale) => {
      acc[sale.category] = (acc[sale.category] || 0) + sale.amount;
      return acc;
    }, {} as { [key: string]: number });

    // Find best performing category
    const bestPerformingCategory = Object.entries(salesByCategory).reduce(
      (best, [category, amount]) => 
        amount > best.totalSales ? { category, totalSales: amount } : best,
      { category: '', totalSales: 0 }
    );

    // Calculate average transaction value
    const averageTransactionValue = totalSales / sales.length;

    // Calculate customer metrics
    const uniqueCustomers = new Set(sales.map(sale => sale.email));
    const customerFrequency = sales.reduce((acc, sale) => {
      acc[sale.email] = (acc[sale.email] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });
    
    const repeatCustomers = Object.values(customerFrequency).filter(freq => freq > 1).length;

    const customerMetrics = {
      totalCustomers: uniqueCustomers.size,
      repeatCustomers
    };

    return {
      bestPerformingCategory,
      totalSales,
      averageTransactionValue,
      salesByCategory,
      customerMetrics
    };
  }
}

export const salesService = new SalesService(); 