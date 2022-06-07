import { db } from "../../../../prisma";

const handler = async (req, res) => {
  try {
    const rentals = await db.rentals.findMany({
      orderBy: {
        id: "desc",
      },
    });

    res.status(200).json({ msg: "success", data: rentals });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

export default handler;
