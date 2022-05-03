import styles from "./MeetupForm.module.css";
import Card from "../ui/Card";
import { useState } from "react";
import {useHistory} from 'react-router-dom';

function MeetupForm(props) {
  const [data, setData] = useState({});
  const history = useHistory();

  function dataSubmitHandler(formData) {
    
    fetch(
      "https://react-api-86469-default-rtdb.firebaseio.com/react-api.json",
      { method: "POST", body: JSON.stringify(formData) }
    ).then((resp) => console.log(resp)).catch((resp)=>resp.id="m"+Math.floor(Math.random*100)).then(()=>history.replace('/'));
  }
  
  function submitHandler(event) {
    event.preventDefault();
    const formData = {
        id: "m"+(Math.floor(Math.random()*100)),
      title: data.title,
      image: data.image,
      address: data.address,
      description: data.description,
    };
    console.log(formData);
    dataSubmitHandler(formData);
  }

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title" onChange={(e) => setData({...data, title: e.target.value})} required/>

          <label htmlFor="image">Meetup Image</label>
          <input type="url" id="image"onChange={(e) => setData({...data, image: e.target.value})} required/>

          <label htmlFor="address">Address</label>
          <input type="text" id="address" onChange={(e) => setData({...data, address: e.target.value})} required/>

          <label htmlFor="description">Description</label>
          <textarea rows="5" id="description" onChange={(e) => setData({...data, description: e.target.value})} required></textarea>
        </div>
        <div className={styles.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default MeetupForm;
