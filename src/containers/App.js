import React, { Suspense, lazy } from "react"
import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const Home = lazy(() => import("../components/pages/home/home"));
const History = lazy(() => import("../components/pages/history/history"));
const Activity = lazy(() => import("../components/pages/activity/activity"));
const Productions = lazy(() => import("../components/pages/productions/productions"));
const Documents = lazy(() => import("../components/pages/documents/documents"));
const Leadership = lazy(() => import("../components/pages/leadership/leadership"));
import ProductsByCategory from "../containers/productions/productions";

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
                        <Container as="article" bsPrefix="content" id="content">
                            <Switch>
                                <Route exact path='/' component={Home}/>
                                <Route path='/history' component={History}/>
                                <Route path='/activity' component={Activity}/>
                                <Route exact path='/productions' component={Productions}/>
                                <Route exact path='/productions/:search_object' component={ProductsByCategory}/>
                                <Route path='/documents' component={Documents}/>
                                <Route exact path='/company/leadership' component={Leadership}/>
                                <Route path='/company/leadership/:id' component={Leadership}/>
                            </Switch>
                        </Container>
                    <FooterComponent/>
                </Suspense>
            </Router>
        );
    }
}

export default App;