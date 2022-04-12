import { db } from "../../../prisma";
import md5 from "md5";
const handler = async (req, res) => {
  const { method } = req.body;
  try {
    const data = await db.accounts.findFirst({
      where: {
        id: "6253d8054701b33115becda3",
      },
    });
    res.status(200).json({ accounts: data });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export default handler;
