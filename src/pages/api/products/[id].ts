import { NextApiRequest, NextApiResponse } from 'next';
import products from '../../../mock/products.json'
import nc from 'next-connect';

const handler = nc<NextApiRequest, NextApiResponse>().get((req, res) => {
  const id = req.query.id
  const product = products.find(product => product.slug === id)

  res.status(200).json(product);
  
  
})


export default handler