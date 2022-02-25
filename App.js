import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './src/navigators/AuthStackNavigator';
import auth from '@react-native-firebase/auth';
import AppStackNavigator from './src/navigators/AppStackNavigator';
import {Provider} from "react-redux";
import store from './store';
import Navigation from './src/navigation';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const onAuthStateChanged = async user => {
    await setCurrentUser(user);
    setIsLoading(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (isLoading) {
    return null;
  }
 
  return (
 
    <NavigationContainer>

    <Provider store ={store}>
    <SafeAreaView style={styles.root}>
    {currentUser ? <AppStackNavigator /> : <AuthStackNavigator />}
    </SafeAreaView>
    </Provider>
    </NavigationContainer>


  );
};

const styles = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor:'#f9fbfc',
  }
});

export default App;