import PropTypes from 'prop-types';
import styles from "./profile.module.css";

const Profile = props => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={props.avatar}
          alt="Аватар пользователя"
          className={styles.avatar}
        />
        <p className={styles.name}>{props.name}</p>
        <p className={styles.tag}>@{props.tag}</p>
        <p className={styles.location}>{props.location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.stats__li}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{props.stats.followers}</span>
        </li>
        <li className={styles.stats__li}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{props.stats.views}</span>
        </li>
        <li className={styles.stats__li}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );

};

export default Profile;

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string
};