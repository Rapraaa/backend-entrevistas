import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SetupPage } from './pages/SetupPage';
import { InterviewPage } from './pages/InterviewPage';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/setup" element={<SetupPage />} />
        <Route path="/interview" element={<InterviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;