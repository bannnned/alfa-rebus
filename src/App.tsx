import { Route, Routes } from "react-router";
import "./App.css";
import { Rebus } from "./Rebus";
import { Final } from "./Final";
import { Link } from "./Link";
import { PATH_PREFIX } from "./constants";

function App() {
  const rebusWord = import.meta.env.REBUS_WORD || "react-4-life";

  return (
    <Routes>
      <Route path={PATH_PREFIX}>
        <Route index element={<Rebus />} />
        <Route path={rebusWord} element={<Final />} />
        <Route path={'link'} element={<Link />} />
      </Route>
      <Route path="*" element={<div>Не та дорога, путник</div>} />
    </Routes>
  );
}

export default App;
