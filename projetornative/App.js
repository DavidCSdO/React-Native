import React from 'react';

// import { createAppContainer } from '@react-navigation'
// import { createDrawerNavigator } from '@react-navigation-drawer'


// import Shop from './src/pages/Shop/Shop';
// import Bab from './src/pages/Shop/Bab';

// const Routes = createAppContainer(
//   createDrawerNavigator({
//     Shop,
//     Bab

//   }, {
//     initialRouterName: 'Shop'
//   } )
// )

// export default Routes;



// import Bab from './src/pages/Itens/Bab'
// import Bon from './src/pages/Itens/Bon'
// import Ros from './src/pages/Itens/Ros'
// import Sam from './src/pages/Itens/Bab'
// import Shop from './src/pages/Shop/Shop'




// const App = () => {

//   return (

//        //<Bab /> 
//        //<Bon />
//        //<Ros />
//        //<Sam />

//        <Shop />
    
//   );
// };

// export default App;

import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import Drw from './src/Routes/app.routes';
import CartContext from './src/context/CartC';

function App() {
  return (
    <CartContext>
      <NavigationContainer>
        <Drw />
      </NavigationContainer>
    </CartContext>
  );
}

export default App;

