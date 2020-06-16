import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import MyClass from './components/my-class/my-class'
import ComponentBox2 from './components/comment-box/comment-box'
import MyContainerComm from "./components/class-to-hoc/cls-hoc";
import Galaxy from "./components/communication-btwn-comp/galaxy";
import TwoWayBinding from "./components/two-way-binding/two-way-binding";
import TwoWayBindingRef from "./components/two-way-binding/two-way-binding-ref";

/*
// Function form - same code
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

// Class form - same code
/*class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
    );
  }
}*/

// Way-1
/*
class App extends Component {
    //JSX: JavaScript Extension (JS+HTML) :::: react library changes it into html, no browser understands JSX other than Chrome.
    // Code comment in JSX is {} + C-style commenting
    render() {
        return (
            <div className="App">
                <h1>This is MyClass Component: </h1><MyClass/><br/>
                <h3>This is Comment Box: </h3><ComponentBox2/><br/>
                MyContainerComm: <MyContainerComm />
            </div>
            // This will break because function can not return two things.
            //<MyClass/>
        );
    }
}*/

// Way-2
function App () {
    return (
        <div className="App">
            <TwoWayBinding />
            <TwoWayBindingRef />
            <h1>This is MyClass Component: </h1><MyClass/><br/>
            <h3>This is Comment Box: </h3><ComponentBox2/><br/>
            MyContainerComm: <MyContainerComm />
            <h3>Communication b/w Componenets: </h3> <Galaxy></Galaxy>
        </div>
        // This will break because function can not return two things.
        //<MyClass/>
    )
}

export default App;
