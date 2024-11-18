import "./App.css";
import Entrypage from "./page/entry/Entrypage";
import DefaultLayout from "./layout/DefaultLayout";
import Dashboard from "./page/entry/dashboard/Dashboard";
import AddTicket from "./page/newticket/AddTicket";
import TicketListing from "./page/ticket-listing/TicketListing";
function App() {
  return (
    <div className="App">
      {/* <Entrypage /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        <TicketListing />
      </DefaultLayout>
    </div>
  );
}

export default App;
