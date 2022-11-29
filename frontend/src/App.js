import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlossaryMain from './GlossaryMain';
import NotFound from './NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='content'>
          <Routes >
            <Route path="/" element={<GlossaryMain />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
