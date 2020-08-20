import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.components';
import SignInUp from './pages/sign-in-up/sign-in-up.components';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { User } from './redux/user/user.models';
import { connect, ConnectedProps } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import store from './redux/store';
import { StoreState } from './redux/root-reducer';

class App extends React.Component<Props> {
  authStateSub$: any = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.authStateSub$ = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth, {});

        userRef?.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...(snapShot.data() as {
              displayName: string;
              email: string;
              dateCreated: Date;
            }),
          });
        });
      } else {
        setCurrentUser(userAuth);
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
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <SignInUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }: StoreState) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch: typeof store.dispatch) => ({
  setCurrentUser: (user: User | null) => dispatch(setCurrentUser(user)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  // ...
};

export default connector(App);
