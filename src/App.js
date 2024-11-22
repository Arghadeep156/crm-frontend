import "./App.css";
import Entrypage from "./page/entry/Entrypage";
// import DefaultLayout from "./layout/DefaultLayout";
import Dashboard from "./page/entry/dashboard/Dashboard";
import AddTicket from "./page/newticket/AddTicket";
import TicketListing from "./page/ticket-listing/TicketListing";
import TicketPage from "./page/ticket/TicketPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/private-route/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Public route */}
          <Route path="/" element={<Entrypage />} />

          {/* Protected routes */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/addticket"
            element={
              <PrivateRoute>
                <AddTicket />
              </PrivateRoute>
            }
          />
          <Route
            path="/tickets"
            element={
              <PrivateRoute>
                <TicketListing />
              </PrivateRoute>
            }
          />
          <Route
            path="/ticket/:tId"
            element={
              <PrivateRoute>
                <TicketPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
