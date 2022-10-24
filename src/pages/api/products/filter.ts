import products from "../../../mock/products.json";
import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";

const handler = nc<NextApiRequest, NextApiResponse>().get((req, res) => {
  const router = req.query;
  const { category, genre } = router;

  if (category) {
    const filtered = products.filter((p) => p.category === category);
    if (filtered.length === 0) {
      res.send(products);
    }
    res.status(200).json(filtered);
  } else if (genre) {
    const filtered = products.filter((p) => p.genre === genre);
    if (filtered.length === 0) {
      res.send(products);
    }
    res.status(200).json(filtered);
  } else {
    res.status(200).json(products);
  }
});

export default handler;
