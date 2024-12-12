import { useEffect, useState } from "react";

const UsePublishers = () => {
  const [publiser, setPublisher] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/publisher")
      .then((res) => res.json())
      .then((data) => {
        setPublisher(data);
      });
  }, []);

  return publiser;
};

export default UsePublishers;
