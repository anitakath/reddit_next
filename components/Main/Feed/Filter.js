import { useState } from "react";

//REDUX
import { filter } from "@/store/filterSlice";
import { useDispatch, useSelector } from "react-redux";

//STYLES
import styles from "../../../styles/Main/Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();

  const currentFilter = useSelector((state) => state.filter);



  const [bestIsActive, setBestIsActive] = useState(false);
  const [hotIsActive, setHotIsActive] = useState(false);
  const [newIsActive, setNewIsActive] = useState(false);
  const [topIsActive, setTopIsActive] = useState(false);



  const filterHandler = (title) => {
    if (title === "beste") {
      dispatch(filter("beste"));

      setBestIsActive(true);
      setHotIsActive(false);
      setNewIsActive(false);
      setTopIsActive(false);
    } else if (title === "heiß") {
      dispatch(filter("heiß"));

      setBestIsActive(false);
      setHotIsActive(true);
      setNewIsActive(false);
      setTopIsActive(false);
    } else if (title === "neu") {
      dispatch(filter("neu"));

      setBestIsActive(false);
      setHotIsActive(false);
      setNewIsActive(true);
      setTopIsActive(false);
    } else if (title === "top") {
      dispatch(filter("top"));

      setBestIsActive(false);
      setHotIsActive(false);
      setNewIsActive(false);
      setTopIsActive(true);
    }
  };

  return (
    <div className={styles.container_wrapper}>
      <div className={styles.container}>
        <div>
          <button
            className={styles.filter_btn}
            onClick={() => filterHandler("beste")}
          >
            {" "}
            beste{" "}
          </button>
        </div>
        <div>
          <button
            className={styles.filter_btn}
            onClick={() => filterHandler("heiß")}
          >
            {" "}
            heiß{" "}
          </button>
        </div>
        <div>
          <button
            className={styles.filter_btn}
            onClick={() => filterHandler("neu")}
          >
            {" "}
            neu{" "}
          </button>
        </div>
        <div>
          <button
            className={styles.filter_btn}
            onClick={() => filterHandler("top")}
          >
            {" "}
            top{" "}
          </button>
        </div>
        <div>
          <button className={styles.filter_btn}> reload </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
