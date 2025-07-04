import { BrowserRouter } from 'react-router-dom';
import MainPage from './components/MainPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainPage />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
