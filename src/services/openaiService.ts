import OpenAI from 'openai';
import { SalesInsights } from '../types';
import dotenv from 'dotenv';

// Load environment variables at the start
dotenv.config();

export class OpenAIService {
  private openai: OpenAI;

  constructor() {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY is not set in environment variables');
    }

    this.openai = new OpenAI({
      apiKey: apiKey
    });
  }

  async generateInsightsSummary(insights: Omit<SalesInsights, 'aiSummary'>): Promise<string> {
    const prompt = `
      Please provide a concise business summary of the following sales insights:
      - Best performing category: ${insights.bestPerformingCategory.category} with total sales of $${insights.bestPerformingCategory.totalSales.toFixed(2)}
      - Total sales: $${insights.totalSales.toFixed(2)}
      - Average transaction value: $${insights.averageTransactionValue.toFixed(2)}
      - Total unique customers: ${insights.customerMetrics.totalCustomers}
      - Number of repeat customers: ${insights.customerMetrics.repeatCustomers}
      - Sales by category: ${JSON.stringify(insights.salesByCategory)}
      
      Please focus on key trends and actionable insights.
    `;

    try {
      const response = await this.openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 150
      });

      return response.choices[0].message.content || 'Unable to generate summary';
    } catch (error) {
      console.error('Error generating AI summary:', error);
      throw new Error('Failed to generate AI summary');
    }
  }
}

export const openAIService = new OpenAIService(); 