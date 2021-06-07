import React from "react";
import { useAuth } from "../lib/auth";
import styles from "../styles/user.module.scss";
import Avatar from "react-avatar";
import Link from "next/link";

export default function user() {
  const { auth, user } = useAuth();

  // console.log("user", user);

  if (!auth || !auth.isLogin) {
    return <div>You need to Login</div>;
  }


  return (
    <div className={styles.userWrapper}>
      <div className={styles.leftSection}>
        <Avatar name={user.name} round />
        <div className={styles.userName}>{user.name}</div>
        <div className={styles.userEmail}>{user.email}</div>
      </div>
      <div className={styles.rightSection}>
        {user &&
          user.reviews &&
          user.reviews.map((review) => (
            <div key={review.id} className={styles.reviewWrapper}>
              <div>{review.complete ? "Completed" : "Incomplete Review"}</div>
              <div>{review.name}</div>
              <Link
                href={{
                  pathname: "/write-a-review",
                  query: { reviewId: review.id },
                }}
                as="write-a-review"
              >
                {review.complete ? "Completed" : "Complete Now"}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
