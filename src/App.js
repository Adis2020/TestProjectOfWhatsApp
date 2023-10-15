import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import WelcomePage from "./components/welcomePage/WelcomePage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="registration" element={<WelcomePage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
