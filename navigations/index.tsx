import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './RootStackNavigator';
import MyDrawer from './MyDrawer';
import MyTabs from './MyTabs';


function Navigation() {
  return (
    <NavigationContainer>
      {/* <RootStackNavigator /> */}
      <MyDrawer />
      {/* <MyTabs /> */}
    </NavigationContainer>
  )
}

export default Navigation;