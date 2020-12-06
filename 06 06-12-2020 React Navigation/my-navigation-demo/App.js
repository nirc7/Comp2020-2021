import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import FirstPage from './Pages/FirstPage';
import SecondPage from './Pages/SecondPage';
//import TabbedPageNavigator from './Pages/TabbedPage';
import MaterialTabbedPageNavigator from './Pages/MaterialTabbedPageNavigator';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="FirstPage">
      <Drawer.Screen
        name="FirstPage"
        component={FirstPage}
        options={{ drawerLabel: 'FirstPage' }}
      />
      <Drawer.Screen
        name="SecondPage"
        component={SecondPage}
        options={{ drawerLabel: 'SecondPage' }}
      />
      <Drawer.Screen
        name="MaterialPage"
        component={MaterialTabbedPageNavigator}
        options={{ drawerLabel: 'MaterialTabbedPage' }}
      />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <MyDrawer>
        <Stack.Navigator
          initialRouteName="FirstPage"
          headerMode="none">
          <Stack.Screen name="FirstPage" component={FirstPage} />
          <Stack.Screen name="SecondPage" component={SecondPage} />
          <Stack.Screen name="MaterialTabbedPageNavigator" component={MaterialTabbedPageNavigator} />
        </Stack.Navigator>
      </MyDrawer>
    </NavigationContainer>
  );
}
export default App;