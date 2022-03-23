import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Navigationbar from './components/navbar/Navbar.component';
import Home from './components/homeSection/Home.component';
import Explore from './components/explore/Explore';
import Create from './components/create/Create';
import Share from './components/share/Share';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Home />
      <Explore />
      <Create />
      <Share />
      <Footer />
    </div>
  );
}

export default App;
