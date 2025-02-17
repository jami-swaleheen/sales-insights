import Joi from 'joi';

const saleRecordSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  product: Joi.string().required(),
  category: Joi.string().required(),
  amount: Joi.number().positive().required(),
  date: Joi.string().isoDate().required(),
  state: Joi.string().required()
});

export function validateSalesData(data: any) {
  const schema = Joi.array().items(saleRecordSchema);
  return schema.validate(data);
} 