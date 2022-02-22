import "./App.scss";
import AboutUs from "./components/AboutUs/AboutUs";
import Culture from "./components/Culture/Culture";
import Foot from "./components/Foot/Foot";
import Head from "./components/Head/Head";
import Information from "./components/Information/Information";

function App() {
   return (
      <div>
         <Head />
         <Information />
         <AboutUs />
         <Culture />
         <Foot />
      </div>
   );
}

export default App;
