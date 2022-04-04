import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      <div id="color-header">
          <Header />
        </div>
      <div id="main-content">
        
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
