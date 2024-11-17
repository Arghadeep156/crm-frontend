import "./App.css";
import Entrypage from "./page/entry/Entrypage";
import DefaultLayout from "./layout/DefaultLayout";
import Dashboard from "./page/entry/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </div>
  );
}

export default App;
