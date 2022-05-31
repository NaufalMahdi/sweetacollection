import { db } from "../../../../prisma";

const handler = async (req, res) => {
  const { product } = req.body;
  //   res.status(200).json({ data: product });

  try {
    //   const { product } = req.body;
    const update = await db.products.update({
      where: {
        id: product.id,
      },
      data: {
        product_name: product.product_name,
        product_category: product.product_category,
        description: product.description,
        color: product.color,
        size: product.size,
        price: product.price,
        total_stock: product.total_stock,
      },
    });
    if (update) {
      res.status(200).json({ msg: "success" });
    } else {
      res.status(500).json({ msg: "err" });
    }
  } catch (err) {
    res.status(500).json({ msg: "err" });
  }
};

export default handler;
