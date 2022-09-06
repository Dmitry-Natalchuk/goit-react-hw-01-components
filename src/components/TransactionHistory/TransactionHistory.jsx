import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/TransactionHistory.module.css'

 const TransactionHistory = ({items}) => {
    return (
        <table className={css.transactionHistory}>
        <thead>
          <tr>
            <th className={css.title}>Type</th>
            <th className={css.title}>Amount</th>
            <th className={css.title}>Currency</th>
          </tr>
        </thead>
        <tbody>
            {items.map(({id,type,amount,currency}) => (
              <tr className={css.line} key={id}>
                <td className={css.value}>{type}</td>
                <td className={css.value}>{amount}</td>
                <td className={css.value}>{currency}</td>
              </tr>
            ))}
        </tbody>
       </table> 
    )
 }
 TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
        })
      )
    }

    export default TransactionHistory
 