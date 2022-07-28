import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    changeTaskStatus: (state, action) => {
        console.log('CHECKED ACTION ', action)
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          task.checked = action.payload.checked;
        }
        return task;
      });
    },
    addTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
    clearTasksList: (state) => (state = initialState),
  },
});

// Action creators are generated for each case reducer function
export const { changeTaskStatus, addTask, clearTasksList } =
  tasksSlice.actions;

export default tasksSlice.reducer;
