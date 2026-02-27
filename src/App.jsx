import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/login/login";

function App() {
  const [count, setCount] = useState(0);

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element= {<div className="Login-theme"><Login /> </div>} />
    //     <Route path="/Dashboard" element= {<div className="Dashboard-theme"><Dashboard /> </div>} />
    //     <Route path="*" element= {<Navigatate to="/" />} />
    //   </Routes>
    // </BrowserRouter>
    <Login />
  );
}

export default App;
