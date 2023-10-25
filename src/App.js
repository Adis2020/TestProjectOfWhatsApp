import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RegistrationPage from "./components/registrationPage/RegistrationPage";
import Main from "./components/main/Main";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="registration" element={<RegistrationPage/>}/>
                <Route path="main" element={<Main/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
