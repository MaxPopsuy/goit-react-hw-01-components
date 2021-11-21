import PropTypes from 'prop-types';
import styles from './transaction.module.css'; // P.S. Стили писал два часа :D

const TransactionHistory = props => {
  return (
    <table className={styles.transactions__history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {props.transactions.map(elem => (
          <tr key={elem.id}>
            <td>{elem.type}</td>
            <td>{elem.amount}</td>
            <td>{elem.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired
}