import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.components';
import SignInUp from './pages/sign-in-up/sign-in-up.components';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component<
  {},
  {
    currentUser: {
      id: string;
      displayName: string;
      email: string;
      dateCreated: Date;
    } | null;
  }
> {
  constructor(props: any) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  authStateSub$: any = null;

  componentDidMount() {
    this.authStateSub$ = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth, {});

        userRef?.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...(snapShot.data() as {
                displayName: string;
                email: string;
                dateCreated: Date;
              }),
            },
          });
        });
      } else {
        this.setState({ currentUser: null })
      }
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
