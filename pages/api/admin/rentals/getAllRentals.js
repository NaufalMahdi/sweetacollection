import { db } from "../../../../prisma";

const handler = async (req, res) => {
  try {
    const rental_statuses = await db.rental_statuses.findMany({});

    let rentals = await db.rentals.findMany({
      orderBy: {
        id_status: "asc",
      },
      where: {
        id_status: { in: [1, 3, 4] },
      },
    });

    for (let i = 0; i < rental_statuses.length; i++) {
      for (let j = 0; j < rentals.length; j++) {
        rentals[j].warna = "";
        if (rentals[j].id_status == 1) {
          rentals[j].warna = "text-blue-500";
        } else if (rentals[j].id_status == 2) {
          rentals[j].warna = "text-green-500";
        } else if (rentals[j].id_status == 3) {
          rentals[j].warna = "text-gray-500";
        } else if (rentals[j].id_status == 4) {
          rentals[j].warna = "text-red-500";
        }

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
