import { useState, useEffect } from "react";
import { clearTasksList } from "../../features/tasks/tasksSlice";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import axios from "axios";
import css from "./style.module.css";

const Header = () => {
  const [currentTime, setCurrentTime] = useState({});

  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const clearList = () => {
    console.log("clear list button clicked...");
    dispatch(clearTasksList());
  };

  const getCurrentTime = async () => {
    const currentTime = await axios.get(
      "https://worldtimeapi.org/api/timezone/Asia/Seoul"
    );

    const dayOfMonth = moment(currentTime.datetime).format("Do");
    const currentMonth = moment(currentTime.datetime).format("MMMM");
    const dayOfWeek = moment(currentTime.datetime).format("dddd");
    setCurrentTime({ dayOfMonth, currentMonth, dayOfWeek });
  };

  useEffect(() => {
    getCurrentTime();
  }, []);

  return (
    <header className={css.headerBox}>
      <div className={css.headerBox_leftPart}>
        <p className={css.currentDate}>
          {currentTime.dayOfWeek}, {currentTime.dayOfMonth}
        </p>
        <p className={css.currentMonth}>{currentTime.currentMonth}</p>
      </div>
      <div className={css.headerBox_rightPart}>
        <p style={{ margin: "0 20px 3px 0" }}>
          {!!tasks && tasks.length || 0}{" "}
          {!!tasks && tasks.length > 0 && tasks.length === 1 ? "Task" : "Tasks"}
        </p>
        <button className={css.clearListBtn} onClick={() => clearList()}>
          <p className={css.clearListTxt}>CLEAR LIST</p>
        </button>
      </div>
    </header>
  );
};

export default Header;
