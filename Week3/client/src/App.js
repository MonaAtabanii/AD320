import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Nav></Nav>
        <Wrapper></Wrapper>
        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;

