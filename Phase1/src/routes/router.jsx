import { Routes, Route, Navigate } from "react-router-dom";
import MovieUI from "../pages/appUI1/MovieUI";
import Error from "../components/Error";
import TvUI from "../pages/appUI1/TvUI";
import Home from "../pages/appUI1/Home";
import Home2 from "../pages/appUI2/Home2";
import Player from "../components/Player";
import Login from "../components/Login";
import Details from "../pages/appUI1/Details";

const MainRouter = () => {
  return (
    <Routes>
      {/* AUTH */}
      {/* <Route path="/logout" element={<Logout />} />
      <Route path="/forgotpass" element={<ForgotPassword_1 />} />
      <Route path="/forgotpass_2" element={<ForgotPassword_2 />} />
      <Route path="/forgotpass_3" element={<ForgotPassword_3 />} />
      <Route path="/changepass" element={<ChangePassword />} />
      <Route path="/register/email" element={<Register_1/>} />
      <Route path="/register/otp" element={<Register_2/>} />
      <Route path="/register/pass" element={<Register_3/>} /> */}

      {/* app1 */}
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shows" element={<TvUI />} />
      <Route path="/movies" element={<MovieUI />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/watch/:id" element={<Player />} />

      {/* app2 */}
      <Route path="/home2" element={<Home2 />} />
      <Route path="/shows2" element={<TvUI />} />
      <Route path="/movies2" element={<MovieUI />} />
      <Route path="/details2/:id" element={<Details />} />
      <Route path="/watch2/:id" element={<Player />} />

      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default MainRouter;
