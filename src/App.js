import './App.css';
import SignIn from './components/signIn';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Dashboard from "./components/dashboard";
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
  <div className="App">

    <AuthContextProvider>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/signIn" element={<SignIn/>}></Route>
        
    </Routes>
    </BrowserRouter>
    </AuthContextProvider>
  </div>
  );
}

export default App;
