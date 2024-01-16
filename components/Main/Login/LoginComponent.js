
import Link from "next/link";


//REDUX
import { useSelector, useDispatch } from "react-redux";
import { login } from "@/store/authSlice";


//STYLES
import styles from "../../../styles/Login.module.css";




const LoginComponent = () =>{


   const dispatch = useDispatch();
   const loginHandler = () => {
     dispatch(login);
   };


    return (
      <div className={styles.container}>
        <h1> hi </h1>
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
          <button type="submit" className={styles.login_button}>
            login
          </button>
          
        </form>

        <div className={styles.register_container}>
          <p> noch kein Konto? </p>
          <Link href={`/Register`} className={styles.register_link}>
            registrieren
          </Link>
        </div>
      </div>
    );
}

export default LoginComponent