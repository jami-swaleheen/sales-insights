import { Request, Response, NextFunction } from 'express';
import { salesService } from '../services/salesService';
import { openAIService } from '../services/openaiService';
import { validateSalesData } from '../utils/validator';

export async function getSalesInsights(req: Request, res: Response, next: NextFunction) {
  try {
    // Validate input
    const { error, value } = validateSalesData(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Calculate insights
    const insights = salesService.calculateInsights(value);

    // Generate AI summary
    const aiSummary = await openAIService.generateInsightsSummary(insights);

    // Return combined response
    res.json({
      ...insights,
      aiSummary
    });
  } catch (error) {
    next(error);
  }
} 