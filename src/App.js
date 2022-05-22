import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import {
  Confirm,
  DetailCampaign,
  Homepage,
  Login,
  NotFound,
  Payment,
  Profile,
  Register,
  Search,
  SearchSomething,
  ShowAll,
  Transaksi,
} from './components/pages';
import Authenticated from './middleware/Authenticated';

function App() {
  return (
    <div className="relative max-w-full max-h-full bg-zinc-50">
      <ToastContainer />
      <Routes>
        {/* Route with authentication */}
        <Route path="/" element={<Authenticated />}>
          <Route index element={<Homepage />} />
          <Route path="/detail/:id" element={<DetailCampaign />} />
          <Route path="/transaksi" element={<Transaksi />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:search" element={<SearchSomething />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/all/:kategori" element={<ShowAll />} />
        </Route>

        {/* Route without autenthication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment/:project" element={<Payment />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
