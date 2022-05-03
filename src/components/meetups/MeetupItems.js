import styles from "./MeetupItems.module.css";
import Card from "../ui/Card";
import {useState} from 'react'

function MeetupItem(props) {
    const [toggle, setToggle] = useState(props.isFavorite);

  function favoriteSubmitHandler(formData) {
      console.log(formData)
    if (formData.isFavorite !== true) {
      fetch(
        "https://react-api-86469-default-rtdb.firebaseio.com/react-api/"+formData.keyId+"/isFavorite.json",
        {
          method: "PUT",
          body: JSON.stringify(true),
        }
      ).then((resp) => console.log(resp)).then(setToggle(true));
    } else {
      fetch(
        "https://react-api-86469-default-rtdb.firebaseio.com/react-api/"+formData.keyId+"/isFavorite.json",
        {
          method: "PUT",
          body: JSON.stringify(false),
        }
      ).then((resp) => console.log(resp)).then(setToggle(false));
    }
  }

  return (
    <li className={styles.item} key={props.id}>
      <Card>
        <div className={styles.image}>
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={() => favoriteSubmitHandler(props)}>
            {toggle ? "Remove" : "Add"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
