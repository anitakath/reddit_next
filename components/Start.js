
import { useEffect, useState } from 'react';


//SUPABASE
import { supabase } from '@/services/supabaseClient';
import { signInWithGoogle } from '@/services/supabaseClient';
import { signInWithGooogle } from '@/services/supabaseClient';

//STYLES
import styles from '../styles/Login.module.css'

//FONT AWESOME
import { faRedditAlien } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

//REDUX 
import { useSelector, useDispatch } from "react-redux";
import { login } from '@/store/authSlice';

const Start = () =>{

  const [googleLogIn, setGoogleLogIn] = useState(false)

  const dispatch = useDispatch();
   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  console.log(isLoggedIn);

  const signUpWithGoogle = async () => {
  const { user, session, error } = await supabase.auth.signIn({
    provider: 'google',
  });

  if (error) {
    console.error('Error signing in with Google:', error);
  }
}



const handleSignInWithGoogle = async()=>{
  try{
    await signInWithGooogle()
    //dispatch(login())
    setGoogleLogIn(true)
    console.log(isLoggedIn)
  } catch(error){
    console.error('google sign in error', error)
  }
}

useEffect(()=>{
  if(googleLogIn === true){
    dispatch(login());
  }

}, [])

 

  




  const loginHandler = (e) =>{
    e.preventDefault();
    dispatch(login())
  }


 

 
    return (
      <div className={styles.container}>
        <div className={styles.reddit_container}>
          <FontAwesomeIcon icon={faRedditAlien} className={styles.icon} />
          <button onClick={loginHandler} className={styles.reddit_title}>
            {" "}
            Login{" "}
          </button>
          <h2 className={styles.reddit_title}> or </h2>
          <button onClick={loginHandler} className={styles.reddit_title}>
            {" "}
            Register
          </button>
        </div>

        <p> sign in with... </p>

        <div className={styles.google_container}>
          <button
            className={styles.google_button}
            onClick={handleSignInWithGoogle}
          >
            <FontAwesomeIcon icon={faGoogle} className={styles.icon} />
            oogle
          </button>
        </div>
      </div>
    );
}

export default Start;