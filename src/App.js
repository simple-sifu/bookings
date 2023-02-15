import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import BookablesPage from './components/Bookables/BookablesPage';
import BookingsPage from './components/Bookings/BookingsPage';
import UsersPage from './components/Users/UsersPage';
import UserPicker from './components/Users/UserPicker';

import { FaCalendarAlt, FaDoorOpen, FaUsers } from 'react-icons/fa';

function App() {
  return (
    <BrowserRouter>
        <div className="App">

          <header >
            <nav>
              <ul>
                <li>
                  <Link to="/bookings" className="btn btn-header">
                    <FaCalendarAlt/>
                    <span>Bookings</span>
                  </Link>
                  <Link to="/bookables" className="btn btn-header">
                    <FaDoorOpen />
                    <span>Bookables</span>
                  </Link>
                  <Link to="/users" className="btn btn-header">
                    <FaUsers />
                    <span>Users</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <UserPicker />
          </header>
          <Routes>
            <Route path="/bookings" element={<BookingsPage/>} />
            <Route path="/bookables" element={<BookablesPage />} />
            <Route path="/users" element={<UsersPage />} />
          </Routes>
        </div>

    </BrowserRouter>
  );
}

export default App;
