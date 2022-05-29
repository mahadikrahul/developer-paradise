import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Numbers from "../../pages/Numbers";
import Validations from "../../pages/Validations";

const DefaultRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/Validations" element={<Validations />} />
        <Route path="/Numbers" element={<Numbers />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default DefaultRoute;
