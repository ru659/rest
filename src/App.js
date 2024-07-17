import HeroImage from "./component/HeroImage.js";
import Menu from "./component/Menu.js";
import Navbar  from "./component/Nav.js";


function App() {
  return (
    <div>
      <Navbar/>
      <div>
      <HeroImage/>

      </div>
      <div className="mt-4 md:p-4 p-6 border-t-4 md:border-2 rounded md:shadow-lg ">

        <Menu/>
      </div>

    </div>
  );
}

export default App;
