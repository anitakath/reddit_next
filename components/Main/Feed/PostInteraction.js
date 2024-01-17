
import { useRouter } from "next/router";
import { useState } from "react";


//FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faShare, faTrash} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";


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


  let comments = 4000;

  let func = num => Number(num)

  let commentsArr = Array.from(String(comments), func)


  if(comments >= 1000){
    //comments = '>1k'
    comments = '>' + commentsArr[0] + 'k'
  }

  

    return (
      <div className={styles.postInteraction_container}>
        <div className={styles.postInteraction_div}>
          <button className={styles.like_btn}>
            <FontAwesomeIcon
              icon={faBookmark}
              className={styles.postInteraction_icon}
            />
            <p> speichern </p>
          </button>
        </div>

        <div className={styles.postInteraction_div}>
          <button className={styles.share_btn}>
            <FontAwesomeIcon
              icon={faShare}
              className={styles.postInteraction_icon}
            />
            <p> teilen </p>
          </button>
        </div>

        <div className={styles.postInteraction_div}>
          <button className={styles.comment_btn}>
            <FontAwesomeIcon
              icon={faComment}
              className={styles.postInteraction_icon}
            />
            <p className={styles.comments_amount}> {comments} </p>
            <p> kommentieren </p>
          </button>
        </div>
        <div className={styles.reportInteraction_div}>
          <button className={styles.report_btn}>
            <FontAwesomeIcon
              icon={faFlag}
              className={styles.postInteraction_icon}
            />
            <p> melden </p>
          </button>
        </div>

        <div className={styles.deleteInteraction_div}>
          <button className={styles.delete_btn}>
            <FontAwesomeIcon
              icon={faTrash}
              className={styles.postInteraction_icon}
              onClick={deletePostHandler}
            />
            <p> löschen </p>
          </button>
        </div>
      </div>
    );
}

export default postInteraction