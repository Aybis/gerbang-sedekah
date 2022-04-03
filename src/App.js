import { Route, Routes } from 'react-router-dom';
import ConfirmPayment from './pages/ConfirmPayment';
import DetailPage from './pages/DetailPage';
import Home from './pages/Home';
import Login from './pages/Login';
import PaymentScreen from './pages/PaymentScreen';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<DetailPage />} />
      <Route path="/payment" element={<PaymentScreen />} />
      <Route path="/confirm" element={<ConfirmPayment />} />
    </Routes>
  );
}

export default App;
