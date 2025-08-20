/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = import.meta.env.VITE_RUBBLE_API_KEY;

  useEffect(() => {

    axios
      .get(
        `https://rubble-api-ai3c.vercel.app/${apiKey}`
      )

      .then(function (response) {
        if (response.status !== 200) {
          throw new Error(`Error: ${response.status}`);
        }
        // console.log(response.data);

        // Delay for 2 seconds before showing content
        setTimeout(() => {
          setData(response.data);
          setLoading(false);
        }, 2000);
      })
      .catch(function (error) {
        // console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <GlobalContext.Provider value={{ data, loading }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(GlobalContext);
};
