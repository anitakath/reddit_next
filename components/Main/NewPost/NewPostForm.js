import Link from "next/link";


import { useRouter } from "next/router";
import { useState } from "react";
import { supabase } from "@/services/supabaseClient";

//STYLES
import styles from "../../../styles/Main/CreatePost.module.css";

//REDUX
import { filter } from "@/store/filterSlice";
import { useDispatch, useSelector } from "react-redux";


//FONT AWESOME
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


//COMPONENTS
import WebUser from "../WebUser";
import Start from "@/components/Start";


const NewPostForm = () => {

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  console.log(isLoggedIn)


  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  console.log(author, title, text);

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const currFilter = useSelector((state) => state.filter)

  console.log(currFilter)



  const createPost = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);

      if(author === '' && title === '' && text === ''){
        console.log('insert!')
        return
      }

      await supabase.from("feed_dummy").insert([
        {
          author: author,
          title: title,
          description: text,
          creator: 'anitakath',
          upvotes: Math.floor(Math.random() * 200),
          downvotes: Math.floor(Math.random() * 100),
        },
      ]);

      dispatch(filter('deine'))

      setLoading(false);
      router.push("/");
       
    } catch (error) {
      setLoading(false);
      console.error(error);
    } finally {
      setLoading(false);

      router.push("/");
    }
  };


  return (
    <div className={styles.container}>
      {isLoggedIn && (
        <div className={styles.createPost_Wrapper}>
          <div className={styles.title_container}>
            <h1 className={styles.createPost_title}>
              ERSTELLE ENEN NEUEN POST
            </h1>
            <Link href={`/`} className={styles.goBack_link}>
              <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
            </Link>
          </div>
          <div className={styles.createPost_div}>
            <form className={styles.createPost_form} onSubmit={createPost}>
              <label className={styles.createPost_label}> Autor </label>
              <input
                type="text"
                placeholder="autor"
                className={styles.createPost_input}
                value={author}
                onChange={(event) => setAuthor(event.currentTarget.value)}
              ></input>

              <label className={styles.createPost_label}> Title </label>
              <input
                type="text"
                placeholder="titel"
                className={styles.createPost_input}
                value={title}
                onChange={(event) => setTitle(event.currentTarget.value)}
              ></input>

              <label className={styles.createPost_label}> Text </label>
              <textarea
                className={styles.createPost_textarea}
                name="content"
                id="content"
                cols="30"
                rows="20"
                placeholder="text"
                value={text}
                onChange={(event) => setText(event.currentTarget.value)}
              />
              <button type="submit" className={styles.createPost_button}>
                {loading ? "POSTEN..." : "ERSTELLEN 🚀"}
              </button>
            </form>

            <div className={styles.webUser_container}>
              <div className={styles.webUser_fixed}>
                <WebUser />
              </div>
            </div>
          </div>
        </div>
      )}

      {!isLoggedIn && (
       <Start/>
      )}
    </div>
  );
};

export default NewPostForm;
