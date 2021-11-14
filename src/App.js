import Topbar from "./components/Sidebar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/pages/Home_page/Home"
import "./app.css"

function App() {
  return (
    <div > 
   <Topbar/>
   <div className="container" >
     <Sidebar />
  
   <div className="otheritem" >
   <h2> Welcome </h2>
     <Home />
   </div>
   </div>
    </div>
  );
}

export default App;
