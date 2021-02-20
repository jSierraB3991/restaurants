import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'

import RestaurantStack from './RestaurantStack'
import AccountStack from './AccountStack'
import FavoriteStack from './FavoriteStack'
import TopRestaurantStack from './TopRestaurantStack'
import SearchStack from './SearchStack'
const Tab = createBottomTabNavigator();

export default function Navigation() {

    const screenOptions = (route, color) => {
        let iconName = ''
        switch(route.name) {
            case 'tabRestaurants':
                iconName = 'compass-outline'
                break
            case 'tabFavorites':
                iconName = 'heart-outline'
                break
            case 'tabTopRestraurants':
                iconName = 'star-outline'
                break
            case 'tabSearch':
                iconName = 'magnify'
                break
            case 'tabAccount':
                iconName = 'home-outline'
                break
        }

        return (
            <Icon type="material-community"
                name={iconName}
                color={color}
                size={22}
            />
        )
    }

    return (
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName='tabRestaurants'
                tabBarOptions={{
                    inactiveTintColor: '#A17DC3',
                    activeTintColor: '#442484'
                }}
                screenOptions={({route}) => ({
                    tabBarIcon: ({color}) => screenOptions(route, color)
                })}
                >
                <Tab.Screen name='tabRestaurants' 
                            component={RestaurantStack}
                            options={{ title:'Restaurantes' } }  />
                <Tab.Screen name='tabFavorites'
                            component={FavoriteStack} 
                            options={{ title:'Favoritos' } } />
                <Tab.Screen name="tabTopRestraurants"
                            component={TopRestaurantStack} 
                            options={{ title:'Top 5' } }/>
                <Tab.Screen name="tabSearch"
                            component={SearchStack}
                            options={{ title:'Buscar' } }/>
                <Tab.Screen name="tabAccount"
                            component={AccountStack}
                            options={{ title:'Cuenta' } }/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

