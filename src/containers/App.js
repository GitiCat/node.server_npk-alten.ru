import React, { Suspense, lazy } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const Home = lazy(() => import("../components/pages/home/home"));
const History = lazy(() => import("../components/pages/history/history"));
const Activity = lazy(() => import("../components/pages/activity/activity"));
const Productions = lazy(() => import("../components/pages/productions/productions"));
const Documents = lazy(() => import("../components/pages/documents/documents"));
const Leadership = lazy(() => import("../components/pages/leadership/leadership"));

const ProductionSlider = lazy(() => import("../containers/productionsSlider/index"));

import HamburgerMenu from "../components/blocks/menu/hamburger-menu";
import FeedBackBtn from "../components/blocks/feedback-btn/feedback-btn.js";
import FooterComponent from "../components/blocks/footer/footer";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <HamburgerMenu/>
                    <FeedBackBtn/>
                    <acricle className='content' id='content'>
                            <Switch>
                                <Route exact path='/' component={Home}/>
                                <Route path='/history' component={History}/>
                                <Route path='/activity' component={Activity}/>
                                <Route exact path='/productions' component={Productions}/>
                                <Route path='/productions/rechargeable-batteries' component={ProductionSlider}/>
                                <Route path='/productions/primary-sources' component={ProductionSlider}/>
                                <Route path='/productions/charge-discharge-devices' component={ProductionSlider}/>
                                <Route path='/documents' component={Documents}/>
                                <Route exact path='/company/leadership' component={Leadership}/>
                                <Route path='/company/leadership/:id' component={Leadership}/>
                            </Switch>
                    </acricle>
                    <FooterComponent/>
                </Suspense>
            </Router>
        );
    }
}

export default App;