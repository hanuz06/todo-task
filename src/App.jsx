import { useSelector } from "react-redux";
import Footer from "./components/footer";
import Header from "./components/header";
import TaskItem from "./components/taskItem";
import TaskInput from "./components/taskInput";

function App() {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "30vw",
          height: "90vh",
          position: "relative",
          borderRadius: "7px",
          border: "1px solid grey",
        }}
      >
        <Header />
        <TaskInput />
        {!!tasks &&
          tasks.length > 0 &&
          tasks.map((task) => <TaskItem key={task.id} {...task} />)}

        <Footer />
      </div>
    </div>
  );
}

export default App;
