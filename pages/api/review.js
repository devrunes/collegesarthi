import { db } from "../../lib/firebase-admin";

export default async (req, res) => {
  console.log("in api");
  try {
    const { reviewId, currentStep, payload } = req.body;
    console.log(reviewId, currentStep, payload);
    // const entries = await db.collection("reviews").get();
    let newId = null;
    if (currentStep === 0) {
      const ref = db.collection("reviews").doc();
      newId = ref.id;
      console.log(newId);
    }
    const id = reviewId || newId;
    console.log(id);
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

    console.log(resp);
    res.status(200).json({ reviewId: id });
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};
