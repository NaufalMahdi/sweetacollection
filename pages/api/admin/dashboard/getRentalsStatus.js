import { db } from "../../../../prisma";

const handler = async (req, res) => {
  try {
    let countDipinjam = await db.rentals.findMany({
      where: {
        id_status: 1,
      },
    });
    let dipinjam = countDipinjam.length;
    let countSelesai = await db.rentals.findMany({
      where: {
        id_status: 2,
      },
    });
    let selesai = countSelesai.length;
    let countTelat = await db.rentals.findMany({
      where: {
        id_status: 3,
      },
    });
    let telat = countTelat.length;
    let countHilang = await db.rentals.findMany({
      where: {
        id_status: 4,
      },
    });
    let hilang = countHilang.length;

    res.status(200).json({
      dipinjam,
      selesai,
      telat,
      hilang,
    });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

export default handler;
