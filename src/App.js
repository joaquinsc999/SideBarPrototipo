import './App.css';
import Grid from './components/Grid/Grid';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className='App__contentContainer'>
        <Header />
        <div className="App__gridContainer">
          <Grid />
        </div>
      </div>
    </div>
  );
}

export default App;
