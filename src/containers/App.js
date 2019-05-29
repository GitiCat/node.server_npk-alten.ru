import React, { Suspense, lazy } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const Home = lazy(() => import("../components/pages/home/home"));
const History = lazy(() => import("../components/pages/history/history"));
const Activity = lazy(() => import("../components/pages/activity/activity"));
const Productions = lazy(() => import("../components/pages/productions/productions"));
const Documents = lazy(() => import("../components/pages/documents/documents"));

import HeaderComponent from "../components/blocks/header/header";
import FooterComponent from "../components/blocks/footer/footer";

class App extends React.Component {
    render() {
        return (
            <Router>
                <HeaderComponent/>
                <acricle className='content' id='content'>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/history' component={History}/>
                            <Route exact path='/activity' component={Activity}/>
                            <Route exact path='/productions' component={Productions}/>
                            <Route exact path='/documents' component={Documents}/>
                        </Switch>
                    </Suspense>
                </acricle>
                <FooterComponent/>
            </Router>
        );
    }
}

export default App;