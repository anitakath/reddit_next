import { useRouter } from "next/router";
import { useState } from "react";
import { supabase } from "@/services/supabaseClient";

//STYLES
import styles from "../../../styles/Main/CreatePost.module.css";

//REDUX
import { filter } from "@/store/filterSlice";
import { useDispatch, useSelector } from "react-redux";


const NewPostForm = () => {


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
  );
};

export default NewPostForm;
