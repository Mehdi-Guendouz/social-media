import "./App.css"
import Aut from "./pages/Aut/Aut";
// import Home from "./pages/home/Home";
import Profile from './pages/profile/profile'
import "./pages/home/Home"


function App() {
  return (
    <div className="App">
      <div className="blur p0"></div>
      <div className="blur p1"></div>
      {/* <Home/> */}
      <Profile/>
      {/* <Aut/> */}
    </div>
  );
}

export default App;
