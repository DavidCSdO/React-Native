import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../pages/Shop/Shop';
import TDC from '../pages/register/';
import TDL from '../pages/login/index';
import Carrinho from '../pages/Cart/Cart';

const Drawer = createDrawerNavigator();

function Dwr() {
  return (
    <Drawer.Navigator
      initialRouteName="TDL"
      screenOptions={{
        headerTitleStyle: {
          fontSize: 25,
          color: '#ffffff',
        },
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#152536',
        },
      }}>
      <Drawer.Screen name="LOGIN" component={TDL} />
      <Drawer.Screen name="CADASTRO" component={TDC} />
      <Drawer.Screen name="HOME" component={Home} />
      <Drawer.Screen name="CARRINHO" component={Carrinho} />
    </Drawer.Navigator>
  );
}
export default Dwr;
