import logo from "./logo.svg";
import "./App.css";
import { TextField } from "@material-ui/core";
import { TableRow as Row } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <form noValidate autoComplete="off">
        <Row>
          <TextField id="standard-basic" label="Standard" />
        </Row>
        <Row>
          <TextField id="filled-basic" label="Filled" variant="filled" />
        </Row>
        <Row>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Row>
      </form>

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

export default App;
