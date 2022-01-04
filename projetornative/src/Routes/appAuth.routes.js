import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TDL from '../pages/login/index';
import TC from '../pages/register/';

const AuthStack = createNativeStackNavigator();

const AuthRoute = () => {
  <AuthStack.Navigator>
    <AuthStack.Screen name="LOGIN" component={TDL} />
    <AuthStack.Screen name="CADASTRO" component={TC} />
  </AuthStack.Navigator>;
};

export default AuthRoute;
