import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../firebase/auth";
const handler = async (req, res) => {
  try {
    const query = await getDocs(collection(db, "users"));
    let data = [];
    query.docs.map((val) => {
      data.push(val.data());
    });
    res.status(200).json({ users: data });
  } catch (err) {
    res.status(500).json(err);
  }
};

export default handler;
