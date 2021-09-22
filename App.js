// import React, { Component } from 'react'
// import { Provider } from "react-redux"
// import MyReducers from './source/data/local/reducers/MyReducers'
// import Navigator from './Navigator'


// export default function App() {

//   return (
//     <Provider store={MyReducers}>
//       <Navigator />
//     </Provider>
//   )
// }





import React, { Component } from 'react'
import { Provider } from "react-redux"
import MyReducers from './source/data/local/reducers/MyReducers'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TestingScreen from './source/Views/TestingScreen'
import SplashScreen from './source/Views/SplashScreen';
import Login from './source/Views/Auth/Login';
import OtpVerify from './source/Views/Auth/OtpVerify';
import Signup from './source/Views/Auth/Signup';
import Bio from './source/Views/Auth/Bio';
const Stack = createStackNavigator();

export default class App extends Component {


  render() {
    return (
      <Provider store={MyReducers}>
        <NavigationContainer>
          <Stack.Navigator headerMode={'none'}>

            {/* Initial Screens */}
            {/* <Stack.Screen name={'SplashScreen'} component={SplashScreen} /> */}
            {/* <Stack.Screen name={'Login'} component={Login} />
            <Stack.Screen name={'OtpVerify'} component={OtpVerify} /> */}
            <Stack.Screen name={'Signup'} component={Signup} />
            <Stack.Screen name={'Bio'} component={Bio} />

            <Stack.Screen name={'TestingScreen'} component={TestingScreen} />

          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}