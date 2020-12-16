import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My personal <code>dashboard</code> project in the blank version - Development version.
        </p>
        <a
          className="App-link"
          href="https://github.com/JensKlimke/dashboard"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get code
        </a>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
