//STYLES
import styles from "../../../styles/Main/Feed.module.css";

//FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

//REDUX
import { increment, decrement } from "@/store/counterSlice";
import { useDispatch, useSelector } from "react-redux";

//API
//import { updatePostVotes } from '../api/rate-post'; // Annahme, dass Sie die API-Funktion zum Aktualisieren der Datenbank haben
import { updatePostVotes } from "../../../pages/api/rate-post";




const PostRating = (props) => {

  const dispatch = useDispatch();
  const currCount = useSelector((state) => state.counter);

  const votes = props.votes
  const postId = props.postId








  const handleIncrement = async () => {


   // dispatch(increment());
    await updatePostVotes({ postId: props.postId, type: "upvotes" }); // Annahme, dass postId als Parameter übergeben wird
  };

  const handleDecrement = async () => {
    //dispatch(decrement());
    await updatePostVotes({ postId: props.postId, type: "downvotes" }); // Annahme, dass postId als Parameter übergeben wird
  };



  return (
    <div className={styles.postRating}>
      <div>
        <FontAwesomeIcon
          icon={faArrowUp}
          className={styles.postArrowUp}
          onClick={handleIncrement}
        />
      </div>
      <p className={styles.amountOfRatings}> {votes} </p>
      <div>
        <FontAwesomeIcon
          icon={faArrowDown}
          className={styles.postArrowDown}
          onClick={handleDecrement}
        />
      </div>
    </div>
  );
};

export default PostRating;
