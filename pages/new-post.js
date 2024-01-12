import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

//COMPONENTS
import Header from "@/components/Header/Header";
import NewPostForm from "@/components/Main/NewPost/NewPostForm";
import WebUser from "@/components/Main/WebUser";

//REDUX
import { Provider} from "react-redux";
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
                ERSTELLE ENEN NEUEN POST
              </h1>
              <Link href={`/`} className={styles.goBack_link}>
                <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
              </Link>
            </div>

            <div className={styles.createPost_div}>
              <NewPostForm />
             

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