import AuthContext from 'context/AuthContext';
import { useContext } from 'react';

const useClassifyTransactions = () => {
  const { user } = useContext(AuthContext);
  return (transaction) => {
    if (!user) {
      return 'neutral';
    }
    switch (user.id) {
      case transaction.senderId:
        return 'sendMoney';
      case transaction.receiverId:
        return 'receivedMoney';
      default:
        return 'neutral';
    }
  };
};

export default useClassifyTransactions;
