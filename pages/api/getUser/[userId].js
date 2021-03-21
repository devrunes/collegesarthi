import { db } from "../../../lib/firebase-admin";

export default async (req, res) => {
  if (req.method === "GET") {
    const { userId } = req.query;
    try {
      const user = await db.collection("users").doc(userId).get();
      res.status(200).json(user.data());
    } catch (err) {
      // console.error(err);
      res.status(500).json({ err: "Something went wrong" });
    }
  }
};
