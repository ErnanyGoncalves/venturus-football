import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import ManageTeam from './ManageTeam';
import { TeamStorage } from './TeamContext';

// Componente com o contexto e rotas

function App() {
  return (
    <div className="bodyBackground">
      <BrowserRouter>
        <TeamStorage>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/new" element={<ManageTeam />} />
              <Route path="/edit/:id" element={<ManageTeam />} />
            </Routes>
          </div>
        </TeamStorage>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
