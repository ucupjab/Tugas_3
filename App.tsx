import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Barang from './src/component/Barang';
import Home from './src/component/Home';
import Akun from './src/component/Akun';

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Barang') {
              iconName = focused ? 'folder-open-outline' : 'folder-outline';
            } else if (route.name === 'Akun') {
              iconName = focused ? 'person-circle-outline' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#ffffff',
          inactiveTintColor: '#ffffff',
          showLabel: false,
          style: {
            backgroundColor: '#454545',
            height: 60,
          },
        }}
      >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{ tabBarStyle: { backgroundColor: '#454545' }, headerShown: false }}
        />
        <Tab.Screen
          name='Barang'
          component={Barang}
          options={{ tabBarStyle: { backgroundColor: '#454545' }, headerShown: false }}
        />
        <Tab.Screen
          name='Akun'
          component={Akun}
          options={{ tabBarStyle: { backgroundColor: '#454545' }, headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;