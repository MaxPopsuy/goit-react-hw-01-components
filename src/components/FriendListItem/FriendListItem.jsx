import PropTypes from 'prop-types';
import styles from './friendListItem.module.css';

const FriendListItem = props => {
  const statusClasses = [props.isOnline ? styles.online : styles.notOnline,  styles.status]
  return (<li className={styles.item}>
    <span className={statusClasses.join(' ')}></span>
    <img className={styles.avatar} src={props.avatar} alt={props.name + ' avatar'} width="100" />
    <p className={styles.name}>{props.name}</p>
  </li>)
};
export default FriendListItem;

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};