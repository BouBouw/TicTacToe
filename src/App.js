import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Main from './pages/main';
import Player from './pages/playing'
import Tutos from './pages/tuto'

function App() {
  return(
    <Router>
      <Routes>
        <Route path="settings" element={<Main/>}/>
        <Route path='didacticiel' element={<Tutos/>}/>
        <Route path="player" element={<Player/>}/>
      </Routes>
    </Router>
  )
}

export default App;
