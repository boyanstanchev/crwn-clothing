import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.components';
import SignInUp from './pages/sign-in-up/sign-in-up.components';
import { auth } from './firebase/firebase.utils';

class App extends React.Component<{}, { currentUser: firebase.User | null }> {
  constructor(props: any) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  authStateSub$: any = null;

  componentDidMount() {
    this.authStateSub$ = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.authStateSub$();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
