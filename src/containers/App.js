import React, { Suspense, lazy } from "react"
import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const Home = lazy(() => import("../components/pages/home/home"));
const History = lazy(() => import("../components/pages/history/history"));
const Activity = lazy(() => import("../components/pages/activity/activity"));
const Productions = lazy(() => import("../components/pages/productions/productions"));
const Documents = lazy(() => import("../components/pages/documents/documents"));
const Leadership = lazy(() => import("../components/pages/leadership/leadership"));
const News = lazy(() => import("../components/pages/news/index"))
const Gallery = lazy(() => import("../components/pages/gallery/index"))
const Album = lazy(() => import("../components/pages/gallery/album/album"))
const Patents = lazy(() => import("../components/pages/patents/index"))
const Patent = lazy(() => import("../components/pages/patents/selected/index"))
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
                                <Route path='/productions/:search_object' component={ProductsByCategory}/>
                                <Route path='/documents' component={Documents}/>
                                <Route exact path='/company/leadership' component={Leadership}/>
                                <Route path='/company/leadership/:id' component={Leadership}/>
                                <Route exact path='/company/gallery' component={Gallery}/>
                                <Route path='/company/gallery/:album' component={Album}/>
                                <Route exact path='/company/patents' component={Patents}/>
                                <Route path='/company/patents/:patent' component={Patent}/>
                                <Route exact path='/news' component={News}/>
                                <Route path='/news/:id' component={News}/>
                            </Switch>
                        </Container>
                    <FooterComponent/>
                </Suspense>
            </Router>
        );
    }
}

export default App;