import { useSelector } from 'react-redux';
import { PaymentAnonym, PaymentLogin } from './payment';

export default function PaymentScreen() {
  const USER = useSelector((state) => state.user);

  return USER?.profile === undefined ? <PaymentAnonym /> : <PaymentLogin />;
}
