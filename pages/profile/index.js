

//COMPONENTS
import Header from '@/components/Header/Header';
import Start from '@/components/Start';


//STYLE
import styles from '../../styles/Profile/Profile.module.css'


//REDUX
import { useSelector } from 'react-redux';

const Profile = () =>{

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  console.log(isLoggedIn)

    return (
      <div>
        {!isLoggedIn && <Start />}

        {isLoggedIn && (
          <div className={styles.container}>
            <Header />
            <div className={styles.profile_container}>

              <h1> Profil </h1>
              
            </div>
          </div>
        )}
      </div>
    );
}

export default Profile;