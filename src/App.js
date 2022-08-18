import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import invoices from './db/data';

// Pages
import Invoices from './Pages/Invoices';
import CreateInvoice from './Pages/CreateInvoice';

// Components
import Navbar from './components/Navbar'


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Invoices invoices={invoices}/>} />
          <Route path="/:id" element={<Invoices invoices={invoices}/>} />
          <Route path="/create" element={<CreateInvoice />} />
        </Routes>
      </div>
    </Router>
  );  
}

export default App;
