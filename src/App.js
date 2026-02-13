import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utls/store";

function App() {
  return (
    <Provider store={store}>
    <div>
        <h1 className="text-3xl font-bold underline"> </h1>
        <Head/>
        <Body/>

     
    </div>
    </Provider>
  );
}

export default App;
