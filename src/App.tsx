import { Outlet } from "react-router-dom";
import Header from "./components/header/header";

const App = () => {
  return (
    <div className="wrapper G-flex-column">
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default App;