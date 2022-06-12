import { db } from "../../../../prisma";

const handler = async (req, res) => {
  try {
    const { id } = req.body;
    const rental_details = await db.rental_details.findMany({
      where: {
        id_rental: id,
      },
    });

    res.status(200).json({
      msg: "success",
      dataRentalDetails: rental_details,
    });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

export default handler;
