import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import RestaurantStack from './RestaurantStack'
import AccountStack from './AccountStack'
import FavoriteStack from './FavoriteStack'
import TopRestaurantStack from './TopRestaurantStack'
import SearchStack from './SearchStack'

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="tabRestaurants" options={{ title:'Restaurantes' } } component={RestaurantStack} />
                <Tab.Screen name="tabFavorites" options={{ title:'Favoritos' } } component={FavoriteStack} />
                <Tab.Screen name="tabTopRestraurants"  options={{ title:'Top Restaurantes' } }component={TopRestaurantStack} />
                <Tab.Screen name="tabSearch"  options={{ title:'Buscar' } }component={SearchStack} />
                <Tab.Screen name="tabAccount"  options={{ title:'Cuenta' } }component={AccountStack} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

