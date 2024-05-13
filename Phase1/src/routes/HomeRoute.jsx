// import Home from "../pages/appUI1/Home";
// import Home2 from "../pages/appUI2/Home2";4
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "../pages/Home.jsx";
import { Configs } from "../data.js";
import Loading from "../components/Loading.jsx";

const HomeRoute = () => {
  const { id } = useParams();
  const [appConfig, setAppConfig] = useState(null);

  function getCountry() {
    return "IN";
  }
  function getSubscription() {
    return "FREE";
  }
  function getOS() {
    return "";
  }
  function getOSver() {
    return "";
  }

  function fetchConfigs(url, callback, errorCallback) {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          errorCallback("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => callback(data))
      .catch((error) => {
        console.log("Error fetching configs:", error);
        errorCallback(error);
      });
  }

  const getMapping = () => {
    try {
      const url = `https://cors-anywhere.herokuapp.com/${
        import.meta.env.VITE_BE_URL
      }/get-mapping`;
      console.log("fdsaf", import.meta.env.VITE_BE_URL);
      const mapping = fetchConfigs(
        url +
          "?" +
          new URLSearchParams({
            projectID: id,
            nocache: false,
            country: getCountry(),
            subscription: getSubscription(),
            os: getOS(),
            osver: getOSver(),
          }),

        (mapping) => {
          console.log("mapping", mapping.appConfig.params);
        },
        (error) => {
          console.error("rer", error);
          setAppConfig(Configs[0].appConfig.params);
        }
      );
    } catch (error) {
      console.log("test", Configs[0].appConfig.params);
      setAppConfig(Configs[0].appConfig.params);
      console.error("rer", error);
    }
  };

  useEffect(() => {
    getMapping();
  }, [appConfig]);

  return appConfig ? <Home appConfig={appConfig} /> : <Loading />;
};

export default HomeRoute;
