import "./App.css";
import Entrypage from "./page/entry/Entrypage";
import DefaultLayout from "./layout/DefaultLayout";
import Dashboard from "./page/entry/dashboard/Dashboard";
import AddTicket from "./page/newticket/AddTicket";

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        {/* <Dashboard /> */}
        <AddTicket />
      </DefaultLayout>
    </div>
  );
}

export default App;
