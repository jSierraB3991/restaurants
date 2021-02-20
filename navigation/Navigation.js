import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Restaurants from '../screens/Restaurants';
import Favorites from '../screens/Favorites';
import Account from '../screens/Account';
import TopRestaurants from '../screens/TopRestaurants';
import Search from '../screens/Search';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Restaurants" options={{ title:'Restaurantes' } } component={Restaurants} />
                <Tab.Screen name="Favorites"  options={{ title:'Favoritos' } } component={Favorites} />
                <Tab.Screen name="TopRestraurants"  options={{ title:'Top Restaurantes' } }component={TopRestaurants} />
                <Tab.Screen name="Search"  options={{ title:'Buscar' } }component={Search} />
                <Tab.Screen name="Account"  options={{ title:'cuenta' } }component={Account} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

