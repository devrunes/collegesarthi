import React ,{useState,useEffect}from 'react'
import Image from "next/image";
import styles from './Signup.module.css';
import axios from 'axios'
import * as yup from "yup";

const SignUp = ({handleCrossClick,user}) => {

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [course,setCourse]=useState('');
    const [number,setNumber]=useState("0");
    const [message, setMessage] = useState("");
    const [question,setQuestion]=useState("");
    const [error, setError] = useState("");
    const [isLoading,setIsLoading]=useState(false)
    // console.log(user&&user)

   //validate user
   const validationSubscriberInput = async () => {
    // console.log(name, course, email, number,question);
    let errors = {};
    
      if (question === "") {
        errors.question = "Question is Empty";
      }

    let schema = yup.object().shape({
      name: yup.string().required(),
      number: yup.number().required().positive().integer(),
      email: yup.string().email().required(),
      course: yup.string().required(),
      question:yup.string()
    });
    let intNumber = parseInt(number ? number : 0);
    try {
      const validationResult = await schema.validate(
        { name, number: intNumber, email, course },
        { abortEarly: false }
      );
      return {
        isValid: !Object.keys(errors).length > 0,
        errors,
      };
      // console.log(validationResult);
    } catch (err) {
      // console.log(err.inner, err.path, "err");
      err.inner.forEach((error) => {
        errors[error.path] = error.message;
      });
      // console.log(errors);
      return {
        isValid: false,
        errors,
      };
    }
  };

  //user signup

  const onSubscribeUser = async () => {
    setError({});
    const { isValid, errors } = await validationSubscriberInput();

    try {
      if (!isValid) {
        setError(errors);
      } else {
        setIsLoading(true)
        const subscribeUser = await axios.post("/api/subscribeUser", {
          email,
          name,
          course,
          number,
          question,
        });
        setIsLoading(false)
        setMessage(subscribeUser.data.message);
        console.log('user data after post request',subscribeUser.data);
      }
    } catch (err) {
      setError(err);
      // console.log(err);
    }
    
  };

  useEffect(() => {
    if (user) {
      setEmail(user && user.email ? user.email : "");
      setName(user && user.name? user.name : "");
      setNumber(user && user.number ? user.number : "");
    }

    return () => {
      setEmail("");
      setName("");
      setNumber("");
      
    };
  }, [user]);


    return (
        <div className={styles.signup_cont}>
      <div className={styles.signup_head}>
        <h1 className={styles.h1_styles}>Ask A Question</h1>
        <h2>You ask we Answer</h2>
      </div>
      <div className={styles.signup_form}>
        <div className={styles.signup_form_left}>
          <div className={styles.signup_form_sec}>
            <div className={styles.signup_imgsec}>
              <div className={styles.signup_img}>
                <Image src="/user.svg" alt="em" layout="fill" />
              </div>
              <p>Full Name</p>
            </div>
            <input
              type="text"
              name="Name"
              id="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
              {error.name && error.name !== "" ? (
            <p className={styles.authError}>{error.name}</p>
          ) : (
            <></>
          )}
          </div>
          <div className={styles.signup_form_sec}>
            <div className={styles.signup_imgsec}>
              <div className={styles.signup_img}>
                <Image src="/mail.svg" alt="em" layout="fill" />
              </div>
              <p>Email</p>
            </div>
            <input
              type="email"
              name="Email"
              id="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
           {error.email && error.email !== "" ? (
            <p className={styles.authError}>{error.email}</p>
          ) : (
            <></>
          )}
          </div>
          

        </div>
        <div className={styles.signup_form_right}>
          <div className={styles.signup_form_sec}>
            <div className={styles.signup_imgsec}>
              <div className={styles.signup_img}>
                <Image src="/number.svg" alt="em" layout="fill" />
              </div>
              <p>Mobile Number</p>
            </div>
            <input
              type="text"
              name="Mobile"
              id="Mobile"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            {error.number && error.number !== "" ? (
            <p className={styles.authError}>{error.number}</p>
          ) : (
            <></>
          )}
          </div>
          <div className={styles.signup_form_right}>
          <div className={styles.signup_form_sec}>
            <div className={styles.signup_imgsec}>
              <div className={styles.signup_img}>
                <Image src="/course.svg" alt="em" layout="fill" />
              </div>
              <p>Course</p>
            </div>
            {/* <input type="course" name="course" id="course" /> */}
            <select
              name="Course"
              className={styles.formSelectInput}
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value="">Select One...</option>
              <option value="BTech">BTech</option>
              <option value="MBA">MBA</option>
              <option value="BSc">BSc</option>
              <option value="BBA">BBA</option>
              <option value="MSc">MSc</option>
            </select>
            {error.course && error.course !== "" ? (
            <p className={styles.authError}>{error.course}</p>
          ) : (
            <></>
          )}
            </div>
            </div>
        </div>
      </div>
       <div className={styles.signup_text_area}>
            <textarea 
            placeholder="Write your description" 
            id="question" 
            name="question"
            value={question}
            onChange={(e)=>setQuestion(e.target.value)}
            />
             {error.question && error.question !== "" ? (
            <p className={styles.authError}>{error.question}</p>
          ) : (
            <></>
          )}
       </div>
      <div className={styles.signup_button_cont}>
        <button className={styles.signup_button}  onClick={onSubscribeUser}>
          Signup
        </button>
       { message&&<div className={styles.msgStyle}>{message}</div>}
        <p className={styles.linkSup}>
          Already Registered? Click Here to Login!
        </p>
    
      </div>
      <div className={styles.auth_crossButton}  onClick={()=>handleCrossClick()}>
        <svg
          // width="40"
          // height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.60005 1.19274L20 15.5927L34.4001 1.23637C34.6836 0.947889 35.0239 0.721375 35.3994 0.571154C35.775 0.420934 36.1776 0.350274 36.5819 0.363644C37.3751 0.414979 38.1226 0.753278 38.6847 1.31537C39.2468 1.87747 39.5851 2.62493 39.6364 3.41819C39.6404 3.80822 39.565 4.19499 39.415 4.55503C39.265 4.91508 39.0434 5.2409 38.7637 5.51274L24.32 20L38.7637 34.4873C39.331 35.0371 39.6451 35.7964 39.6364 36.5818C39.5851 37.3751 39.2468 38.1226 38.6847 38.6846C38.1226 39.2467 37.3751 39.585 36.5819 39.6364C36.1776 39.6497 35.775 39.5791 35.3994 39.4289C35.0239 39.2786 34.6836 39.0521 34.4001 38.7636L20 24.4073L5.64369 38.7636C5.36017 39.0521 5.01987 39.2786 4.64432 39.4289C4.26877 39.5791 3.86613 39.6497 3.46187 39.6364C2.65381 39.5943 1.88998 39.2544 1.31782 38.6822C0.745664 38.1101 0.405747 37.3462 0.363686 36.5382C0.359738 36.1482 0.435058 35.7614 0.585077 35.4013C0.735097 35.0413 0.956689 34.7155 1.23641 34.4436L15.6801 20L1.19278 5.51274C0.920929 5.23723 0.707401 4.90976 0.56495 4.54989C0.422499 4.19001 0.354048 3.80511 0.363686 3.41819C0.415022 2.62493 0.75332 1.87747 1.31541 1.31537C1.87751 0.753278 2.62497 0.414979 3.41823 0.363644C3.81935 0.344592 4.22009 0.408377 4.59546 0.551021C4.97084 0.693664 5.31281 0.912109 5.60005 1.19274Z"
            // fill="#BDBDBD"
            fill="#333366"
          />
        </svg>
      </div>
    </div>
    )
}

export default SignUp
