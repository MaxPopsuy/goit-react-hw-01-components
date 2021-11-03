import React from 'react';
import styles from "./friendlist.module.css";



const Friendlist = props => {
  console.log(props);
  let statusStyles = []
  return (
    <ul className={styles.friends__list}>
      {props.friends.map(friend => (
        statusStyles = [styles.status],
        statusStyles.push(friend.isOnline ? styles.online : styles.notOnline),
        <li key={friend.id} className={styles.item}>
          <span className={statusStyles.join(" ")}> </span>
          <img className={styles.avatar} src={friend.avatar} alt="avatar" width="48" />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );

};

export default Friendlist;

