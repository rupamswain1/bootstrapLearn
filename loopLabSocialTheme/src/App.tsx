import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Navigationbar from './components/navbar/Navbar.component';
import Home from './components/homeSection/Home.component';

function App() {
  return (
    <div className="App">
      {/* <Navigationbar /> */}
      <Home />
    </div>
  );
}

export default App;
