import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Paises from './ListaPaises';
import DetallePais from './DetallePais';
const Stack = createStackNavigator();
const App = () => {
return (
<Stack.Navigator initialRouteName="Paises">
<Stack.Screen name="Paises" component={Paises} options={{
headerShown: false }} />
<Stack.Screen name="DetallePais" component={DetallePais} options={{
headerShown: false }} />
</Stack.Navigator>
);
};
export default App;
