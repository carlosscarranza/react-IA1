import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  return (
    <>
      <Card garbage={true} />
      <Card garbage={true} />
    </>
  );
}

export default App;
