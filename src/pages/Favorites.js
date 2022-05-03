import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

function Favorties() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://react-api-86469-default-rtdb.firebaseio.com/react-api.json")
      .then((resp) => resp.json())
      .then((resp) => {
        const arr = [];
        for (const key in resp) {
          if (resp[key].isFavorite === true) {
            arr.push(resp[key]);
          }
        }
        setLoading(false);
        setData(arr);
        console.log(arr);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Favorites</h1>
      <MeetupList meet={data}></MeetupList>
    </div>
  );
}

export default Favorties;
