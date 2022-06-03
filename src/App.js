//Components
import Header from './components/Header/Header';
import Home from './components/Home';

//Styles
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
