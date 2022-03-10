/**
 * file: Project Router File
 * date: 2020-07-21
 * author: Frank
 * lastModify: Frank 2020-07-21
 */
import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
/* <------------------------------------ **** Lazy Loading all the pages START **** ------------------------------------ */

const Homepage = React.lazy(() => import(/* webpackChunkName: 'EditPage' */ '../Pages/HomePage'));
/* <------------------------------------ **** Lazy Loading all the pages END **** ------------------------------------ */

const RootRouter = (): JSX.Element => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Homepage} />
            </Switch>
        </Router>
    );
};

export default RootRouter;
