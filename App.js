import React, { Component } from 'react';
import LoginView from './src/views/login/LoginView';
import HomeView from './src/views/home/HomeView';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import userReducer from './src/reducer/UserReducer'; 

const store = createStore(userReducer);

const MainNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginView,
      navigationOptions: {
        header: null
      }
    },
    Home: {
      screen: HomeView,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'Login'
  }
);

const AppContainer = createAppContainer(MainNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}