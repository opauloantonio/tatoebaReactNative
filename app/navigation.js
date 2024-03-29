import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from './screens/Home';
import About from './screens/About';
import History from './screens/History';
import Bookmarks from './screens/Bookmarks';
import SearchResults from './screens/SearchResults';
import ChooseLanguage from './screens/ChooseLanguage';
import SentenceDetails from './screens/SentenceDetails';
import useTheme from './utils/useTheme';

const HomeStack = createStackNavigator();
const AboutStack = createStackNavigator();
const BookmarksStack = createStackNavigator();
const HistoryStack = createStackNavigator();

const defaultStackScreenOptions = {
  headerStyle: {
    backgroundColor: "#4caf50",
  },
  headerTintColor: "white",

  // This is to fix an issue with the header having too much padding on the first render of every screen.
  // There are many issues about this bug in the Github page of react-navigation
  // Apparently, this only fixes the issue for Android but not for iOS.
  // I'm not developing for iOS at the moment anyways...
  headerStatusBarHeight: 0,
};

function HomeTab() {
  return(
    <HomeStack.Navigator
      screenOptions={defaultStackScreenOptions}
    >
      <HomeStack.Screen 
        name="Home" component={Home} 
        options={{
          headerTitle: "Tatoeba",
        }} 
      />

      <HomeStack.Screen 
        name="SearchResults" component={SearchResults} 
        options={({ route }) => ({ 
          title: `Results for "${route.params.text}"`
        })}
      />

      <HomeStack.Screen 
        name="SentenceDetails" component={SentenceDetails} 
        options={({ route }) => ({ 
          title: `Sentence #${route.params.id}`
        })}
      />

      <HomeStack.Screen 
        name="ChooseLanguage" component={ChooseLanguage} 
        options={{
          headerTitle: "Language Selection",
        }}
      />
    </HomeStack.Navigator>
  )
}

function AboutTab() {
  return(
    <AboutStack.Navigator
      screenOptions={defaultStackScreenOptions}
    >
      <AboutStack.Screen name="About" component={About} />
    </AboutStack.Navigator>
  );
}

function HistoryTab() {
  return(
    <HistoryStack.Navigator
      screenOptions={defaultStackScreenOptions}
    >
      <AboutStack.Screen name="History" component={History} />
    </HistoryStack.Navigator>
  );
}

function BookmarksTab() {
  return(
    <BookmarksStack.Navigator
      screenOptions={defaultStackScreenOptions}
    >
      <AboutStack.Screen name="Bookmarks" component={Bookmarks} />
    </BookmarksStack.Navigator>
  );
}

const BottomTab = createMaterialBottomTabNavigator();

function Tabs() {
  const theme = useTheme();

  return(
    <BottomTab.Navigator
      barStyle={{
        ...(theme === "light" && {backgroundColor: "white"}),
      }}
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
          tabBarIcon: ({color}) => <Icon size={25} color={color} name="home" />,
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
