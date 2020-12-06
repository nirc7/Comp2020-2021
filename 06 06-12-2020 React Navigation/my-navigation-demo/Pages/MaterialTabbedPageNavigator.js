import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FirstTabPage from './FirstTabPage';
import SecondTabPage from './SecondTabPage';

const Tab = createMaterialBottomTabNavigator();

export default function MaterialTabbedPageNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="FirstTabPage"
      activeColor="#55ff00"
      inactiveColor='black'
      barStyle={{ backgroundColor: '#694fad' }}    >

      <Tab.Screen
        name="FirstTabPage"
        component={FirstTabPage}
        options={{
          tabBarLabel: 'Alternate1',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell-plus" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="SecondTabPage"
        component={SecondTabPage}
        options={{
          tabBarLabel: 'Alternate2',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="soccer" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
