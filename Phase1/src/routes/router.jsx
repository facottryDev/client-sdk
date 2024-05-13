import { Routes, Route, Navigate } from "react-router-dom";
import MovieUI from "../pages/appUI1/MovieUI";
import Error from "../components/Error";
import TvUI from "../pages/appUI1/TvUI";
import Home from "../pages/appUI1/Home";
import Home2 from "../pages/appUI2/Home2";
import Player from "../components/Player";
import Login from "../components/Login";
import Details from "../pages/appUI1/Details";
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

      {/* app2 */}
      <Route path="/home2" element={<Home2 />} />
      <Route path="/shows2" element={<TvUI />} />
      <Route path="/movies2" element={<MovieUI />} />
      <Route path="/details2/:id" element={<Details />} />
      <Route path="/watch2/:id" element={<Player />} />

      <Route path="/jsonData" element={<data />} />

      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default MainRouter;
