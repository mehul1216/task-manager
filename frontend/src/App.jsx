import {
  Routes,
  Route
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import NewTask from "./pages/NewTask";
import TaskDetails from "./pages/TaskDetails";
import EditTask from "./pages/EditTask";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Dashboard />}
      />

      <Route
        path="/tasks"
        element={<Tasks />}
      />

      <Route
        path="/tasks/new"
        element={<NewTask />}
      />

      <Route
        path="/tasks/:id"
        element={<TaskDetails />}
      />

      <Route
        path="/tasks/:id/edit"
        element={<EditTask />}
      />
  </Routes>
  );
}

export default App;