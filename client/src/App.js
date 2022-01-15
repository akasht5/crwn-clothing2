import React,{ useEffect } from 'react';
import { GlobalStyle } from './global.styles';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component' 
import CheckoutPage from './pages/checkout/checkout.component'
import { 
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import SignInAndSignUpPage from './pages/signin-signup/signin-signup.component';
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from './redux/user/user.actions';
import { connect } from 'react-redux'

const App = ({ checkUserSession,currentUser }) => {
  useEffect(() => {
      checkUserSession();
  },[checkUserSession])
 
  return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' render={() => 
                currentUser ? (
                  <CheckoutPage />
                ) : (
                  <Redirect to='/signin' />
                )
            } />
            <Route exact path='/signin' render={() => 
                currentUser ? (
                  <Redirect to='/' />
                ) : (
                  <SignInAndSignUpPage />
                )
            } />
        </Switch>   
      </div>
  );
  
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession : () => dispatch(checkUserSession())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
