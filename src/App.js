import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RegistrationPage from "./components/registrationPage/RegistrationPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="registration" element={<RegistrationPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
