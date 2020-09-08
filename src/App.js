import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './components/SearchPage/SearchPage';
import Footer from './components/SearchPage/SearchPageFooter';
import MoreRepoDetails from './components/MoreRepoDetails'
const Profile = React.lazy(() => import('./components/profile'));


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Search} />
          <Suspense fallback={<div>Loading...</div>} >
            <Route exact path="/:profile_id" component={Profile} />

          </Suspense>
          <Route exact path="/:profile_id/:repo_name" component={MoreRepoDetails} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
