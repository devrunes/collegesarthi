import React from "react";
import MissUpdate from "../MissUpdate/MissUpdate";
import styles from "./Footer.module.css";
import Link from "next/link";
import NewsLetter from "../NewsLetter/NewsLetter";
export default function Footer() {
  const explore = [1, 2, 3, 4, 5];
  const exams = [1, 2, 3, 4, 5];
  const college = [1, 2, 3, 4, 5];
  return (
    <div>
      <section>
        {/* <MissUpdate
          themeColor="#333333"
          heading="Never miss an Update!"
          headingSup="You focus on your studies , we take care of rest"
        /> */}
        <NewsLetter />
          <div className={styles.FooterSub}>
            <div className={styles.ColumsCont}>
            <div className={styles.Colums}>
              <h3><u>Explore All</u></h3>
              <li>
              <Link href="/explore/exams/engineering">
                <a>Engineering</a>
              </Link>
              </li>
              <li>
              <Link href="/explore/exams/medical">
                <a>Medical</a>
              </Link>
              </li>
              <li>
              <Link href="/explore/exams/defence">
                <a>Defence</a>
              </Link>
              </li>
              <li>
              <Link href="/explore/exams/aviation">
                <a>Aviation</a>
              </Link>
              </li>
              <li>
              <Link href="/explore/exams/hotel-management">
                <a>Hotel Management</a>
              </Link>
              </li>
              <li>
              <Link href="/explore/exams/design">
                <a>Design</a>
              </Link>
              </li>
              <li>
              <Link href="/explore/exams/commerce">
                <a>Commerce</a>
              </Link>
              </li>
              <li>
              <Link href="/explore/exams/agriculture">
                <a>Agriculture</a>
              </Link>
              </li>
              <li>
              <Link href="/explore/exams/law">
                <a>Law</a>
              </Link>
              </li>
            </div>
            <div className={styles.Colums}>
              <h3><u>Top Exams</u></h3>
              {/* {explore.map((i) => ( */}
              <li>
              <Link href="/blogs/exams/jee-main">
                <a>Joint Entrance Examination(JEE)-Mains</a>
              </Link>
              </li>
              <li>
              <Link href="/blogs/exams/jee-advanced">
                <a>Joint Entrance Examination(JEE)-Advanced</a>
              </Link>
              </li>
              <li>
              <Link href="/blogs/exams/nift">
                <a>National Institute of Fashion Technology Entrance Exam (NIFT)</a>
              </Link>
              </li>
              <li>
              <Link href="/blogs/exams/cat">
                <a>Common Admission Test(CAT)</a>
              </Link>
              </li>
              <li>
              <Link href="/blogs/exams/nda">
                <a>National Defence Academy (NDA)</a>
              </Link>
              </li>
              <li>
              <Link href="/blogs/exams/nchmct-jee">
                <a>National Council for Hotel Management and Catering Technology(NCHMCT)-JEE</a>
              </Link>
              </li>
              <li>
              <Link href="/blogs/exams/clat">
                <a>Common Law Admission Test(CLAT)</a>
              </Link>
              </li>
              {/* ))} */}
            </div>
            <div className={styles.Colums}>
              <h3><u>Top Featured Colleges</u></h3>
              <li>Indian Institute of Technology(IIT)- Mumbai</li>
              <li>Indian Institute of Technology(IIT)- Delhi</li>
              <li>Indian Institute of Technology(IIT)- Roorkee</li>
              <li>Indian Institute of Technology(IIT)- Madras</li>
              <li>All India Institute of Medical Science(AIIMS)- Delhi</li>
              <li>Indian Institute of Technology(IIT)- Kharagpur</li>
            </div>
            </div>
            <div className={styles.Footer_col_emo}>
              
                <div className={styles.ImageIcon}>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.666992"
                      width="40"
                      height="40"
                      fill="#4F4F4F"
                    />
                    <rect x="0.666992" width="40" height="40" fill="#F2F2F2" />
                    <path
                      d="M22.6672 7.33301C14.567 7.33301 8.00049 13.8995 8.00049 21.9997C8.00049 30.0999 14.567 36.6663 22.6672 36.6663C30.7673 36.6663 37.3338 30.0999 37.3338 21.9997C37.3338 13.8995 30.7673 7.33301 22.6672 7.33301ZM22.6672 9.45796C25.8625 9.45796 28.7787 10.6529 30.9933 12.6203C29.3662 14.7668 26.8934 16.1957 24.4169 17.1637C23.0665 14.6938 21.4042 12.0897 19.7119 9.80811C20.6595 9.57923 21.6492 9.45796 22.6672 9.45796ZM17.3315 10.6467C18.9667 13.0918 20.5498 15.3603 21.9985 17.9281C18.3379 18.8763 14.2032 19.4451 10.3836 19.4549C11.189 15.5468 13.8131 12.3033 17.3315 10.6467ZM32.3846 14.0701C34.1338 16.2112 35.1888 18.9411 35.2079 21.917C32.3073 21.3456 29.4222 21.1949 26.4843 21.4907C26.1533 20.6672 25.754 19.8851 25.3707 19.0417C27.9034 18.0202 30.6102 16.2718 32.3846 14.0701ZM23.0164 19.8682C23.3307 20.5365 23.6943 21.2442 24.0352 21.9681C19.9505 23.7693 15.6064 26.1768 13.35 30.3955C11.3456 28.1725 10.1254 25.2286 10.1254 21.9997C10.1254 21.877 10.1275 21.7546 10.131 21.6328C14.5062 21.6116 18.7996 21.064 23.0164 19.8682ZM29.6438 23.2878C31.4675 23.2822 33.3502 23.5369 35.0528 23.9844C34.496 27.4875 32.4882 30.5072 29.6652 32.409C28.9917 29.3471 28.3501 26.4177 27.2161 23.4634C27.9982 23.3468 28.8149 23.2904 29.6438 23.2878ZM35.1179 23.5154C35.1093 23.5864 35.1007 23.6574 35.0909 23.728C35.1007 23.6573 35.1092 23.5865 35.1179 23.5154ZM24.8943 24.0364C26.051 27.0226 26.9588 30.3298 27.5663 33.5485C26.0611 34.1879 24.4056 34.5414 22.6672 34.5414C19.7665 34.5414 17.0962 33.5562 14.9716 31.9028C17.2429 28.217 20.7608 25.4292 24.8943 24.0364Z"
                      fill="#4F4F4F"
                    />
                  </svg>
                </div>
                <div className={styles.ImageIcon}>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.666992"
                      width="40"
                      height="40"
                      fill="#4F4F4F"
                    />
                    <rect x="0.666992" width="40" height="40" fill="#F2F2F2" />
                    <path
                      d="M23.4779 37.3996V22.9474H19.7339V17.7439H23.4779V13.2994C23.4779 9.80687 25.6896 6.59961 30.7856 6.59961C32.849 6.59961 34.3747 6.8015 34.3747 6.8015L34.2545 11.6607C34.2545 11.6607 32.6985 11.6452 31.0005 11.6452C29.1628 11.6452 28.8684 12.5096 28.8684 13.9443V17.7439H34.4006L34.1598 22.9474H28.8684V37.3996H23.4779Z"
                      fill="#4F4F4F"
                    />
                  </svg>
                </div>
                <div className={styles.ImageIcon}>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.666992"
                      width="40"
                      height="40"
                      fill="#4F4F4F"
                    />
                    <rect x="0.666992" width="40" height="40" fill="#F2F2F2" />
                    <path
                      d="M10.9249 37.3997V17.6086H4.00818V37.3997H10.9249ZM7.46743 14.9048C9.8794 14.9048 11.3807 13.3851 11.3807 11.4859C11.3358 9.54395 9.8795 8.06641 7.5132 8.06641C5.14727 8.06641 3.6001 9.54398 3.6001 11.4859C3.6001 13.3852 5.10107 14.9048 7.42227 14.9048H7.46721H7.46743ZM14.7533 37.3997H21.67V26.3474C21.67 25.7559 21.7149 25.165 21.8976 24.7422C22.3976 23.5603 23.5357 22.3363 25.4463 22.3363C27.9492 22.3363 28.9505 24.1512 28.9505 26.8118V37.3996H35.8668V26.0515C35.8668 19.9725 32.4544 17.1439 27.9037 17.1439C24.1724 17.1439 22.5341 19.1275 21.6239 20.4785H21.6701V17.6082H14.7534C14.8442 19.4653 14.7534 37.3993 14.7534 37.3993L14.7533 37.3997Z"
                      fill="#4F4F4F"
                    />
                  </svg>
                </div>
                <div className={styles.ImageIcon}>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.666992"
                      width="40"
                      height="40"
                      fill="#4F4F4F"
                    />
                    <rect x="0.666992" width="40" height="40" fill="#F2F2F2" />
                    <path
                      d="M27.3463 13.1038H35.5808V15.1015H27.3463V13.1038ZM19.0952 21.0081C20.9155 20.1372 21.869 18.8122 21.869 16.7649C21.869 12.7158 18.8558 11.7334 15.3763 11.7334H5.80029V32.0576H15.6446C19.3346 32.0576 22.7977 30.2827 22.7977 26.1552C22.7977 23.6043 21.5924 21.718 19.0952 21.0081ZM10.2663 15.2006H14.4558C16.0697 15.2006 17.5185 15.6505 17.5185 17.5244C17.5185 19.2497 16.3917 19.9432 14.7943 19.9432H10.2663V15.2006ZM15.0337 28.6069H10.2622V23.0099H15.1286C17.0934 23.0099 18.3358 23.8313 18.3358 25.9116C18.3358 27.9589 16.854 28.6069 15.0337 28.6069ZM38.8003 24.9128C38.8003 20.5582 36.2536 16.93 31.6472 16.93C27.1688 16.93 24.1226 20.3023 24.1226 24.7229C24.1226 29.3045 27.0078 32.4497 31.6472 32.4497C35.1598 32.4497 37.4341 30.8689 38.5279 27.4966H34.9658C34.5778 28.7555 33.001 29.416 31.7752 29.416C29.4059 29.416 28.1676 28.0291 28.1676 25.6722H38.7714C38.7838 25.4287 38.8003 25.1728 38.8003 24.9128ZM28.1676 23.1214C28.2956 21.1856 29.5875 19.9762 31.5192 19.9762C33.55 19.9762 34.5654 21.169 34.7429 23.1214H28.1676Z"
                      fill="#4F4F4F"
                    />
                  </svg>
                </div>
                <div className={styles.ImageIcon}>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.666992"
                      width="40"
                      height="40"
                      fill="#4F4F4F"
                    />
                    <rect x="0.666992" width="40" height="40" fill="#F2F2F2" />
                    <path
                      d="M22.6632 14.4741C18.4988 14.4741 15.1379 17.835 15.1379 21.9994C15.1379 26.1638 18.4988 29.5247 22.6632 29.5247C26.8276 29.5247 30.1885 26.1638 30.1885 21.9994C30.1885 17.835 26.8276 14.4741 22.6632 14.4741ZM22.6632 26.8903C19.9701 26.8903 17.7723 24.6925 17.7723 21.9994C17.7723 19.3063 19.9701 17.1085 22.6632 17.1085C25.3563 17.1085 27.5541 19.3063 27.5541 21.9994C27.5541 24.6925 25.3563 26.8903 22.6632 26.8903ZM30.4967 12.4121C29.5244 12.4121 28.7392 13.1973 28.7392 14.1696C28.7392 15.1419 29.5244 15.9271 30.4967 15.9271C31.469 15.9271 32.2542 15.1456 32.2542 14.1696C32.2545 13.9387 32.2092 13.71 32.121 13.4967C32.0328 13.2833 31.9033 13.0895 31.7401 12.9262C31.5768 12.763 31.383 12.6335 31.1696 12.5453C30.9562 12.4571 30.7276 12.4118 30.4967 12.4121ZM37.3322 21.9994C37.3322 19.9741 37.3505 17.9671 37.2368 15.9454C37.123 13.5972 36.5874 11.5132 34.8702 9.79605C33.1494 8.07525 31.0691 7.54324 28.7209 7.4295C26.6955 7.31575 24.6885 7.3341 22.6669 7.3341C20.6416 7.3341 18.6346 7.31575 16.6129 7.4295C14.2647 7.54324 12.1807 8.07892 10.4635 9.79605C8.74273 11.5168 8.21072 13.5972 8.09698 15.9454C7.98323 17.9708 8.00158 19.9777 8.00158 21.9994C8.00158 24.0211 7.98323 26.0317 8.09698 28.0534C8.21072 30.4016 8.7464 32.4856 10.4635 34.2028C12.1843 35.9235 14.2647 36.4556 16.6129 36.5693C18.6382 36.683 20.6452 36.6647 22.6669 36.6647C24.6922 36.6647 26.6992 36.683 28.7209 36.5693C31.0691 36.4556 33.1531 35.9199 34.8702 34.2028C36.591 32.482 37.123 30.4016 37.2368 28.0534C37.3542 26.0317 37.3322 24.0247 37.3322 21.9994ZM34.1034 30.6511C33.8356 31.3189 33.5127 31.8179 32.9953 32.3315C32.478 32.8489 31.9827 33.1717 31.3149 33.4396C29.385 34.2064 24.8023 34.034 22.6632 34.034C20.5241 34.034 15.9378 34.2064 14.0079 33.4433C13.3401 33.1754 12.8411 32.8525 12.3274 32.3352C11.8101 31.8179 11.4872 31.3225 11.2194 30.6548C10.4562 28.7212 10.6286 24.1385 10.6286 21.9994C10.6286 19.8603 10.4562 15.274 11.2194 13.344C11.4872 12.6763 11.8101 12.1773 12.3274 11.6636C12.8448 11.1499 13.3401 10.8234 14.0079 10.5555C15.9378 9.79238 20.5241 9.96483 22.6632 9.96483C24.8023 9.96483 29.3886 9.79238 31.3186 10.5555C31.9863 10.8234 32.4853 11.1463 32.999 11.6636C33.5163 12.181 33.8392 12.6763 34.1071 13.344C34.8702 15.274 34.6978 19.8603 34.6978 21.9994C34.6978 24.1385 34.8702 28.7212 34.1034 30.6511Z"
                      fill="#4F4F4F"
                    />
                  </svg>
                </div>
            </div>
          </div>
      </section>
    </div>
  );
}
