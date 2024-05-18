import { Routes, Route, Navigate } from "react-router-dom";
import MovieUI from "../pages/MovieUI";
import Error from "../components/Error";
import TvUI from "../pages/TvUI";
import Home from "../pages/Home";
// import Home2 from "../pages/Home2";
import Player from "../components/Player";
import Login from "../components/Login";
import Details from "../pages/Details";
import HomeRoute from "../routes/HomeRoute";

const MainRouter = () => {
  return (
    <Routes>
      {/* app1 */}
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shows" element={<TvUI />} />
      <Route path="/movies" element={<MovieUI />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/watch/:id" element={<Player />} />
      <Route path="/home/:id" element={<HomeRoute />} />

      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default MainRouter;
