import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TegloPriBremmenost from "./components/TegloPriBremmenost";
import UserLoginModalForm from "./components/UserLoginModalForm";
import UserContactModalForm from "./components/UserContactModalForm";
import Sidebar from "./components/Sidebar";

import Result from "./components/Result";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [currentWeight, setCurrentWeight] = useState();

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
          <Route
            path="/"
            element={
              <TegloPriBremmenost
                currentWeight={currentWeight}
                setCurrentWeight={setCurrentWeight}
              />
            }
            exact
          />
          <Route
            path="/result"
            element={
              <Result
                currentWeight={currentWeight}
                setCurrentWeight={setCurrentWeight}
              />
            }
          />
          <Route
            path="/login"
            element={
              <UserLoginModalForm
                closeModal={closeModal}
                isOpen={isOpen}
                handleSubmit={handleSubmit}
              />
            }
            exact
          />

          <Route
            path="/contact"
            element={
              <UserContactModalForm
                closeModal={closeModal}
                isOpen={isOpen}
                handleSubmit={handleSubmit}
              />
            }
            exact
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
