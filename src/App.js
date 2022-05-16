import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer  from './components/Footer/Footer';
import Description from './components/Description/Description';
import Work from './components/Work/Work';


function App() {
  return (
    <div>
       <Header />
        <Description />
        <Work />
        <Footer />
        
    </div>
  );
}

export default App;
