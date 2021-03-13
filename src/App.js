import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Looks from './components/Looks';
import TrendingAndPoster from './components/TrendingAndPoster';

function App() {
  return (
    <div className="App">
      <Header />
      <TrendingAndPoster />
      <Looks />
      <Footer />
    </div>
  );
}

export default App;
