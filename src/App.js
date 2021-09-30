import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <p className="bg-yellow-200 text-4xl hover:text-blue-900">This is my text.</p>
      <button class="text-white hover:text-red-500 ...">
        Hover me
      </button>
      <button class="... md:text-blue-500 md:hover:text-blue-600 ...">Button</button>

      <p className="text-primary">hello</p>
      <p className="text-custom">This is custom</p>
    </div>
  );
}

export default App;
