import './styles/App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <p>
        Edit <code>routes/api/crud.js</code> for adding Backend APIs.<br/>
        View existing APIs at <a className="App-link"
        href="http://localhost:5001/api/v1/get"
        target="_blank"
        rel="noopener noreferrer">/api/v1/...</a>
      </p>
      <Footer />
    </div>
  );
}

export default App;
