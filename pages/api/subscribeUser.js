import { db } from "../../lib/firebase-admin";

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const {
        name,
        email,
        number,
        course,
        modelDatas: modelData = {},
        question = "",
      } = req.body;

      let questions = {};

      if (question !== "") {
        questions.question = question;
      }

      // console.log(modelData, req.body.modelDatas);

      const user = await db
        .collection("subscribedUsers")
        .where("name", "==", name)
        .where("email", "==", email)
        .where("number", "==", number)
        .where("course", "==", course)
        .get();
      const curDate = new Date();

      const createdAt = `${curDate.getUTCFullYear()}-${curDate.getUTCMonth()}-${curDate.getUTCDate()}`;

      let userData = [];

      user.forEach((aUser) => {
        console.log(aUser.id);
        userData.push({ id: aUser.id, ...aUser.data() });
      });

      // console.log(userData, "ndm");

      if (userData[0]) {
        const useset = db
          .collection("subscribedUsers")
          .doc(userData[0].id)
          .set({
            name,
            email,
            number,
            course,
            createdAt,
            ...modelData,
            ...questions,
          });

        return res
          .status(200)
          .json({ message: "your subscription has been ubdated......." });
      } else {
        const newUser = await db.collection("subscribedUsers").add({
          name,
          email,
          number,
          course,
          createdAt,
          ...modelData,
          ...questions,
        });

        return res
          .status(200)
          .json({ message: "We will Notify you from now on....." });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({ err: "Something went wrong" });
    }
  } else {
    return res.status(405).send("Method not allowed");
  }
};
