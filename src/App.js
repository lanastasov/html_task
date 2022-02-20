import svg from "./assets/wave-big.svg";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TegloPriBremmenost from "./components/TegloPriBremmenost";
import UserLoginModalForm from "./components/UserLoginModalForm";
import UserContactModalForm from "./components/UserContactModalForm";
import Sidebar from "./components/Sidebar";
import "font-awesome/css/font-awesome.min.css";
import Header from "./components/Header";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const openModal = () => setIsOpen({ isOpen: true });
  const closeModal = () => setIsOpen({ isOpen: false });

  const handleSubmit = (name) => {
    console.log("handleSubmit name  ", name);
  };
  return (
    <div className="App">
      <div className="App" id="outer-container">
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TegloPriBremmenost />} exact />
        </Routes>
      </BrowserRouter>

      {/* {isOpen ? (
        <UserLoginModalForm
          closeModal={closeModal}
          isOpen={isOpen}
          handleSubmit={handleSubmit}
        />
      ) : null} */}
      {/* <UserContactModalForm
        closeModal={closeModal}
        isOpen={isOpen}
        handleSubmit={handleSubmit}
      /> */}
      {/* <TegloPriBremmenost /> */}
    </div>
  );
}

export default App;
