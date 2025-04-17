import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthForm from './pages/AuthForm';
import BarMenu from './components/sidebar/pprincipal/Page';
import StageForm from './forms/StageForm';
import StagiairePage from './forms/StagiairePage';

function App() {
  return (
    <BrowserRouter>
      <BarMenu />
      <Routes>
        <Route path="/" element={null} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/stage" element={<StageForm />} />
        <Route path="/profil" element={null} />
        <Route path="/documents" element={null} />
        <Route path="/fiche" element={null} />
        <Route path="/stagiaire" element={<StagiairePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;