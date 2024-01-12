
import { useRouter } from "next/router";
import { useState } from "react";


//FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faTrash} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";


//SUPABASE
import { supabase } from "@/services/supabaseClient";

//STYLES
import styles from '../../../styles/Main/Feed.module.css'


//REDUX
import { filter } from "@/store/filterSlice";
import { useDispatch, useSelector } from "react-redux";


const postInteraction = (props) =>{

  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch();
  const router = useRouter();

  console.log(props.postId)

  

  const deletePostHandler = async (event) =>{
    event.preventDefault();
    console.log('delete post')
    
    try{
      setIsLoading(true);

      const {errors} = await supabase
      .from("feed_dummy")
      .delete()
      .eq('id', props.postId)

     
      setIsLoading(false);
      //router.reload();
      router.push("/");
      
       

    } catch(error){
      console.error(error)
    } finally{
      setIsLoading(false);
      dispatch(filter("deine"));
      // router.reload();
      router.push("/");
    }
  }

    return (
      <div className={styles.postInteraction_container}>
        <div className={styles.postInteraction_div}>
          <button className={styles.like_btn}>
            <FontAwesomeIcon
              icon={faHeart}
              className={styles.postInteraction_icon}
            />
            <p> like </p>
          </button>
        </div>

        <div className={styles.postInteraction_div}>
          <button className={styles.share_btn}>
            <FontAwesomeIcon
              icon={faShare}
              className={styles.postInteraction_icon}
            />
            <p> share </p>
          </button>
        </div>

        <div className={styles.postInteraction_div}>
          <button className={styles.comment_btn}>
            <FontAwesomeIcon
              icon={faComment}
              className={styles.postInteraction_icon}
            />
            <p> comment </p>
          </button>
        </div>

        <div className={styles.postInteraction_div}>
          <button className={styles.comment_btn}>
            <FontAwesomeIcon
              icon={faTrash}
              className={styles.postInteraction_icon}
              onClick={deletePostHandler}
            />
            <p> delete </p>
          </button>
        </div>
      </div>
    );
}

export default postInteraction