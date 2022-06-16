import CrewDashboard from './components/CrewDashboard/CrewDashboard';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import './index.css';

function App() {
  return (
    <div className='app'>
      <Header className />
      <CrewDashboard />
      <Footer />
    </div>
  );
}

export default App;
