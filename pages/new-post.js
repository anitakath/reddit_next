import Link from "next/link";

//COMPONENTS
import Header from "@/components/Header/Header";
import WebUser from "@/components/Main/WebUser";

//REDUX
import {Provider} from 'react-redux'
import store from '@/store';

//STYLES
import styles from '../styles/Main/CreatePost.module.css'


//FONT AWESOME
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const NewPost = () =>{

    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <div className={styles.container}>
            <div className={styles.title_container}>
              <h1 className={styles.createPost_title}>
                {" "}
                ERSTELLE ENEN NEUEN POST{" "}
              </h1>
              <Link href={`/`} className={styles.goBack_link}>
                <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
              </Link>
            </div>

            <div className={styles.createPost_div}>
              <form className={styles.createPost_form}>
                <label className={styles.createPost_label}> Autor </label>
                <input
                  type="text"
                  placeholder="autor"
                  className={styles.createPost_input}
                ></input>

                <label className={styles.createPost_label}> Title </label>
                <input
                  type="text"
                  placeholder="titel"
                  className={styles.createPost_input}
                ></input>

                <label className={styles.createPost_label}> Text </label>
                <input
                  type="textarea"
                  placeholder="text"
                  className={styles.createPost_input}
                ></input>
                <button type="submit" className={styles.createPost_button}>
                  erstellen 🚀
                </button>
              </form>
              <div className={styles.webUser_container}>
                <div className={styles.webUser_fixed}>
                  <WebUser />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Provider>
    );
}

export default NewPost;