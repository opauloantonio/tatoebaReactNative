import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from './screens/Home';
import About from './screens/About';
import History from './screens/History';
import Bookmarks from './screens/Bookmarks';
import SearchResults from './screens/SearchResults';

const HomeStack = createStackNavigator();
const AboutStack = createStackNavigator();

function HomeTab() {
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="SearchResults" component={SearchResults} />
    </HomeStack.Navigator>
  )
}

function AboutTab() {
  return(
    <AboutStack.Navigator>
      <AboutStack.Screen name="About" component={About} />
    </AboutStack.Navigator>
  );
}

function HistoryTab() {
  return(
    <AboutStack.Navigator>
      <AboutStack.Screen name="History" component={History} />
    </AboutStack.Navigator>
  );
}

function BookmarksTab() {
  return(
    <AboutStack.Navigator>
      <AboutStack.Screen name="Bookmarks" component={Bookmarks} />
    </AboutStack.Navigator>
  );
}

const BottomTab = createMaterialBottomTabNavigator();

function Tabs() {
  return(
    <BottomTab.Navigator
      barStyle={{backgroundColor: "white"}}
      activeColor="#4caf50"
      initialRouteName="Home"
    >
      <BottomTab.Screen 
        name="Bookmarks" 
        component={BookmarksTab} 
        options={{
          tabBarIcon: ({color}) => <Icon size={25} color={color} name="bookmark" />
        }}
      />

      <BottomTab.Screen 
        name="Home" 
        component={HomeTab} 
        options={{
          tabBarIcon: ({color}) => <Icon size={25} color={color} name="home" />
        }}
      />

      <BottomTab.Screen 
        name="History" 
        component={HistoryTab} 
        options={{
          tabBarIcon: ({color}) => <Icon size={25} color={color} name="history" />
        }}
      />

      <BottomTab.Screen 
        name="About" 
        component={AboutTab} 
        options={{
          tabBarIcon: ({color}) => <Icon size={25} color={color} name="info" />
        }}
      />
    </BottomTab.Navigator>
  );
}

export default Tabs;
