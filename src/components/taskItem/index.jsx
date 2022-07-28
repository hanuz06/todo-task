import React from "react";
import { useDispatch } from "react-redux";
import { changeTaskStatus } from "../../features/tasks/tasksSlice";
import css from "./style.module.css";
import classNames from 'classnames/bind';

const TaskItem = ({ id, task, timestamp, checked }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <div className={css.containerLeftPart}>
        <input
          type="checkbox"
          className={css.checkbox}          
          checked={checked}
          onChange={() => dispatch(changeTaskStatus({ id, checked: !checked }))}
        />
        <p className={classNames({[css.textLineThrough]:checked})}>{task}</p>
      </div>
      <div className={css.timestamp}>
        <p>{timestamp}</p>
      </div>
    </div>
  );
};

export default TaskItem;
