


import Link from "next/link";
import { useRouter } from "next/router";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { login } from "@/store/authSlice";




//STYLES
import styles from "../../../styles/Login.module.css";



const RegisterComponent = () =>{

    const router = useRouter();
    


   const dispatch = useDispatch();
   const loginHandler = (e) => {
     e.preventDefault();
     dispatch(login());
     router.push("/");
   };

   const isLoggedIn = useSelector((state) => state.auth);

   console.log(isLoggedIn.isLoggedIn);



    return (
      <div className={styles.container}>
        <form className={styles.login_form} onSubmit={loginHandler}>
          <label className={styles.login_label}> email </label>
          <input
            type="email"
            className={styles.login_input}
            placeholder="E-Mail"
          ></input>

          <label className={styles.login_label}> passwort </label>
          <input
            type="password"
            className={styles.login_input}
            placeholder="Passwort"
          ></input>

          <label className={styles.login_label}> passwort </label>
          <input
            type="password"
            className={styles.login_input}
            placeholder="Passwort wiederholen"
          ></input>

          <button type="submit" className={styles.login_button}>
            registrieren
          </button>
        </form>
      </div>
    );
}

export default RegisterComponent;