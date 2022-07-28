import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/tasks/tasksSlice";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import css from "./style.module.css";

const TaskInput = (props) => {
  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  const addNewTask = () => {
    if (!!task) {
      const newTask = {
        id: uuidv4(),
        task,
        checked: false,
        timestamp: moment(new Date()).format("LT"),
      };
      dispatch(addTask(newTask));
      setTask("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNewTask();
    }
  };

  return (
    <div className={css.container}>
      <button
        style={{ outline: "none", border: "none" }}
        onClick={() => addNewTask()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="#bbbbd5"
          className="bi bi-plus"
          viewBox="0 0 16 16"
        >
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </button>
      <input
        className={css.textInput}
        type="text"
        placeholder="Type your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
    </div>
  );
};

TaskInput.propTypes = {};

export default TaskInput;
