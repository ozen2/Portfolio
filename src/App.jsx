import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
