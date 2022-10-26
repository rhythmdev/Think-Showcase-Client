import { Toaster } from "react-hot-toast";
import "./App.css";
import Home from "./components/Home"

function App() {
  return <div>
     <Toaster
       position="top-center"
       reverseOrder={false}
      />
    <Home/>
  </div>;
}

export default App;
