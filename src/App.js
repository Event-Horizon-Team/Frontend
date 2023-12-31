import {Routes, Route} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";

import './App.css';
import Login from './loginAndSignup/login.js';
import Profile from "./porfile/profile";
import ValidationPage from "./validation/validationPage";
import Event from "./event/event";
import RequireAuth from "./Authentication/RequireAuth";
import RequireNoAuth from "./Authentication/ReruireNoAuth";
import {RoutePathNames} from "./Routes/RoutePathNames";
import Ticket from "./tickets/tickets";
import Header from "./Header/Header";
import {LoginContextProvider} from "./Authentication/LogInContext";
import Dashboard from "./DashBoard/Dashboard";


function App(){
    return (
        <div className="App">
            <Router>
                <LoginContextProvider>
                    <Header />
                    <Routes>
                        <Route path={RoutePathNames.dashboard} element={<Dashboard />} />
                        <Route element={<RequireAuth />}>
                            <Route path={RoutePathNames.event} element={<Event />} />
                            <Route path={RoutePathNames.profile} element={<Profile />} />
                            <Route path={RoutePathNames.ticket} element={<Ticket/>} />
                        </Route>
                        <Route element={<RequireNoAuth />}>
                            <Route path={RoutePathNames.login} element={<Login />} />
                        </Route>
                        <Route path={RoutePathNames.validation} element={<ValidationPage />} />
                    </Routes>
                </LoginContextProvider>
            </Router>
        </div>
    );
}

export default App;
