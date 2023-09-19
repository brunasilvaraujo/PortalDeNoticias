import './App.css'
import NoticesProvider from './context/NoticesProvider';
import Home from './pages/Home'

function App() {

  return (
    <NoticesProvider>
      <Home />
    </NoticesProvider>
  );
}

export default App
