import { NextApiRequest, NextApiResponse } from "next";
import products from "../../../mock/products.json";
import nc from "next-connect";

const handler = nc<NextApiRequest, NextApiResponse>().get((req, res) => {
  res.status(200).json(products);
});

export default handler;
