import styles from "./MeetupLists.module.css";
import MeetupItem from "./MeetupItems";

function MeetupList(props) {
  return (
    <ul className={styles.list}>
      {props.meet.map((meet) => (
        <MeetupItem
          key={meet.id}
          keyId={meet.key}
          id={meet.id}
          image={meet.image}
          title={meet.title}
          address={meet.address}
          description={meet.description}
          isFavorite={meet.isFavorite}
        ></MeetupItem>
      ))}
    </ul>
  );
}

export default MeetupList;
