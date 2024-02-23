import { useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

const useAxios = (baseUrl) => {
  const [data, setData] = useState([]);

  const addCard = async (name) => {
    try {
      const url = name ? `${baseUrl}${name}` : baseUrl;
      const response = await axios.get(url);
      setData((cards) => [...cards, { ...response.data, id: uuid() }]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return [data, addCard];
};

export default useAxios;
