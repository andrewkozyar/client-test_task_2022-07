import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/Footer';
import NavBar from './components/navBar/NavBar';
import { AppRoute } from './router';

function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <AppRoute />
        <Footer />
      </BrowserRouter>
  );
}

export default App;
