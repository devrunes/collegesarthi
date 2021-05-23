import { db } from "../../lib/firebase-admin";
import { firestore } from "firebase-admin";

export default async (req, res) => {
  if (req.method === "POST") {
    //console.log("in api");
    try {
      const { reviewId, currentStep, payload, userId } = req.body;
      //console.log("review id, step, payload", reviewId, currentStep, payload);
      // const entries = await db.collection("reviews").get();
      let newId = null;
      if (currentStep === 0) {
        const ref = db.collection("reviews").doc();
        newId = ref.id;
        //console.log(newId, userId);
        const respo = await db
          .collection("users")
          .doc(userId)
          .update({
            reviews: firestore.FieldValue.arrayUnion({
              id: newId,
              name: payload.instituteName,
              complete: false,
            }),
          });
      }
      if (currentStep === 10) {
        const respo = await db
          .collection("users")
          .doc(userId)
          .update({
            reviews: firestore.FieldValue.arrayUnion({
              id: newId,
              name: payload.instituteName,
              complete: true,
            }),
          });
      }
      const id = reviewId || newId;
      //console.log("id is", id);
      const resp = await db
        .collection("reviews")
        .doc(id)
        .set(
          {
            ...payload,
            currentStep,
          },
          { merge: true }
        );

      //console.log(resp);
      res.status(200).json({ reviewId: id });
    } catch (e) {
      //console.log(e);
      res.status(400).end();
    }
  }
  if (req.method === "GET") {
    const { id } = req.query;
    //console.log("id", id);
    const resp = await db.collection("reviews").doc(id).get();
    //console.log("data from get", resp.data());
    res.status(200).json(resp.data());
  }
};
