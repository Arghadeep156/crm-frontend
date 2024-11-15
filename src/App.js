import "./App.css";
import Entrypage from "./page/entry/Entrypage";
import DefaultLayout from "./layout/DefaultLayout";

function App() {
  return (
    <div className="App">
      <DefaultLayout>{Entrypage}</DefaultLayout>
    </div>
  );
}

export default App;
