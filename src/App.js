import logo from './logo.svg';
import './App.css';

const myLogo = new URL("../public/mylogo.png",import.meta.url)
const bg = new URL("../public/bg.jpg",import.meta.url)

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>SAD</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div>
        <div className="content">
            <div className="info">
              <div className="info-wrapper">
                  <div className="logo">
                    <img src={myLogo} />
                    <p>The</p>
                  </div>
                  <p><span>Fastest, Most Accurate</span> Way to Close Your Books!</p>
              </div>
            </div> 
              <div className="wrapper">
                <div className="footer">
                      <div className="footer-title">
                          <h2>SCHEDULE A DEMO</h2>
                          <p>Learn more About FloQast.</p>
                      </div>
                      <div className="form">
                          <p>Learn how to FloQast can <span>Improve Your Month-End</span></p>
                          <form>
                            <input placeholder="First Name*"/>
                            <input placeholder="Email*"/>
                            <button>SCHEDULE NOW</button>
                          </form>
                      </div>
                  </div>
                </div>
            </div>
          </div>
      </div>
      
  );
}

export default App;
