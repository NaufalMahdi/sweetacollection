import { db } from "../../../../prisma";

const handler = async (req, res) => {
  try {
    const categories = await db.product_categories.findMany();
    res.status(200).json({ categories: categories });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
export default handler;
