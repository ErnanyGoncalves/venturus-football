import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import ManageTeam from './ManageTeam';

function App() {

  return (
    <div className="bodyBackground">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/new" element={<ManageTeam />} />
            <Route path="/edit/:id" element={<ManageTeam />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
