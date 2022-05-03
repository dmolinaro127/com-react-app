import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

function AllMeetups() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://react-api-86469-default-rtdb.firebaseio.com/react-api.json")
      .then((resp) => resp.json())
      .then((resp) => {
          const arr = []
          for(const key in resp){
             arr.push({...resp[key], key: key});
          }
        setLoading(false);
        setData(arr);
        console.log(arr)
      })},
    []);
  if (loading) {
      return <div>Loading...</div>
  }
  return (
    <div>
      <h1>All Meet ups</h1>
      <MeetupList meet={data}></MeetupList>
    </div>
  );
}

export default AllMeetups;
