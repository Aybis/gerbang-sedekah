import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Authenticated from './middleware/Authenticated';
import Gate from './middleware/Gate';
import ConfirmPayment from './pages/ConfirmPayment';
import DetailPage from './pages/DetailPage';
import Home from './pages/Home';
import Login from './pages/Login';
import PaymentScreen from './pages/PaymentScreen';
import Register from './pages/Register';

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        {/* Route without autenthication */}
        <Route path="/" element={<Gate />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="/" element={<Authenticated />}>
          <Route index element={<Home />} />
          <Route path="/detail" element={<DetailPage />} />
        </Route>

        <Route path="/payment/:project" element={<PaymentScreen />} />
        <Route path="/confirm" element={<ConfirmPayment />} />
      </Routes>
    </>
  );
}

export default App;
