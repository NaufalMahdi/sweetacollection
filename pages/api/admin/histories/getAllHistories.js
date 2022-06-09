import { db } from "../../../../prisma";

const handler = async (req, res) => {
  try {
    const rental_statuses = await db.rental_statuses.findMany({});

    let rentals = await db.rentals.findMany({
      orderBy: {
        id: "desc",
      },
    });

    for (let i = 0; i < rental_statuses.length; i++) {
      for (let j = 0; j < rentals.length; j++) {
        if (rental_statuses[i].id_status == rentals[j].id_status) {
          rentals[j].status = rental_statuses[i].status;
        }
      }
    }

    res.status(200).json({ msg: "success", data: rentals });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

export default handler;
