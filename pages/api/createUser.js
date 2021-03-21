import { db } from "../../lib/firebase-admin";

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const { name, email, number, city, userId, course } = req.body;
      const curDate = new Date();
      const createdAt = `${curDate.getUTCFullYear()}-${curDate.getUTCMonth()}-${curDate.getUTCDate()}`;
      const user = await db.collection("users").doc(userId).set({
        name,
        email,
        number,
        city,
        userId,
        course,
        createdAt,
      });

      res.status(200).json({ userId });
    } catch (err) {
      // console.error(err);
      res.status(500).json({ err: "Something went wrong" });
    }
  } else {
    res.status(405).send("Method not allowed");
  }
};
