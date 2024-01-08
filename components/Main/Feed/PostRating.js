//STYLES
import styles from "../../../styles/Main/Feed.module.css";

//FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

//REDUX
import { increment, decrement } from "@/store/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const PostRating = () => {
  const dispatch = useDispatch();
  const currCount = useSelector((state) => state.counter);

  return (
    <div className={styles.postRating}>
      <div>
        <FontAwesomeIcon
          icon={faArrowUp}
          className={styles.postArrowUp}
          onClick={() => dispatch(increment())}
        />
      </div>
      <p className={styles.amountOfRatings}> {currCount} </p>
      <div>
        <FontAwesomeIcon
          icon={faArrowDown}
          className={styles.postArrowDown}
          onClick={() => dispatch(decrement())}
        />
      </div>
    </div>
  );
};

export default PostRating;
