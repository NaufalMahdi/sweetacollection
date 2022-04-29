import db from "../prisma";
const handler = async (req, res) => {
  try {
    const { email, password } = req.body;

    const login = await db.accounts.count({
      where: {
        email: email,
        password: password,
      },
    });

    if (login > 0) {
      res.status(200).json({ msg: "success" });
    } else {
      res.status(200).json({ msg: "error" });
    }
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

export default handler;
