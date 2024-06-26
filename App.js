import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AccueilScreen from './screens/AccueilScreen';
import ProfileScreen from './screens/ProfileScreen';
import OffreScreen from './screens/OffreScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Accueil">
        <Stack.Screen name="Accueil" component={AccueilScreen} />
        <Stack.Screen name="Profil" component={ProfileScreen} />
        <Stack.Screen name="OffreScreen" component={OffreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};