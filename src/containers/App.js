import React, { Suspense, lazy } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const Home = lazy(() => import("../components/pages/home/home"));
const History = lazy(() => import("../components/pages/history/history"));
const Activity = lazy(() => import("../components/pages/activity/activity"));
const Productions = lazy(() => import("../components/pages/productions/productions"));
const RechargeableBattery = lazy(() => import("../components/pages/productions/subs/rechargeable-batteries.js"));
const PrimarySources = lazy(() => import("../components/pages/productions/subs/primary-sources.js"));
const ChargeDischargeDevices = lazy(() => import("../components/pages/productions/subs/charge-discharge-devices.js"));
const Documents = lazy(() => import("../components/pages/documents/documents"));

import HeaderComponent from "../components/blocks/header/header";
import HamburgerMenu from "../components/blocks/menu/hamburger-menu"
import FooterComponent from "../components/blocks/footer/footer";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <HamburgerMenu/>
                    <HeaderComponent/>
                    <acricle className='content' id='content'>
                            <Switch>
                                <Route exact path='/' component={Home}/>
                                <Route path='/history' component={History}/>
                                <Route path='/activity' component={Activity}/>
                                <Route exact path='/productions' component={Productions}/>
                                <Route path='/productions/rechargeable-batteries' component={RechargeableBattery}/>
                                <Route path='/productions/primary-sources' component={PrimarySources}/>
                                <Route path='/productions/charge-discharge-devices' component={ChargeDischargeDevices}/>
                                <Route path='/documents' component={Documents}/>
                            </Switch>
                    </acricle>
                    <FooterComponent/>
                </Suspense>
            </Router>
        );
    }
}

export default App;