import {Routes, Route} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";

import './App.css';
import {RoutePathNames} from "./Routes/RoutePathNames";
import EventPage from "./NewEvent/EventPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Utilities/Colors.css';


function App(){
    return (
        <div className="App">
            <EventPage />
            {/*<Router>*/}
            {/*    <LoginContextProvider>*/}
            {/*        <Header />*/}
            {/*        <Routes>*/}
            {/*            <Route path={RoutePathNames.dashboard} element={<Dashboard />} />*/}
            {/*            <Route element={<RequireAuth />}>*/}
            {/*                <Route path={RoutePathNames.event} element={<Event />} />*/}
            {/*                <Route path={RoutePathNames.profile} element={<Profile />} />*/}
            {/*                <Route path={RoutePathNames.ticket} element={<Ticket/>} />*/}
            {/*            </Route>*/}
            {/*            <Route element={<RequireNoAuth />}>*/}
            {/*                <Route path={RoutePathNames.login} element={<Login />} />*/}
            {/*            </Route>*/}
            {/*            <Route path={RoutePathNames.validation} element={<ValidationPage />} />*/}
            {/*        </Routes>*/}
            {/*    </LoginContextProvider>*/}
            {/*</Router>*/}
        </div>
    );
}

export default App;
