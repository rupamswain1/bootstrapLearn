import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Navigationbar from './components/navbar/Navbar.component';
import Home from './components/homeSection/Home.component';
import Explore from './components/explore/Explore';
function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Home />
      <Explore />
    </div>
  );
}

export default App;
