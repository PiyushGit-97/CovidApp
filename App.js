//import { StatusBar } from 'expo-status-bar';
import React, { } from 'react';
import { Platform,StyleSheet, Text, StatusBar, View, Button } from 'react-native';
import LoginScreen from "./pages/LoginPage";
import SurveyScreen from "./pages/Survey";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({navigation})=>{


  return (
    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
      <Text>Login screen</Text>
      <Button onPress={()=>{navigation.navigate('Login')}} title="click"/>
    </View>
  );
};

const Stack = createStackNavigator();
export default function App() {

  return(
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Survey" component={SurveyScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    opacity:0.5,
  },
  header_view:{
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
  },
  header_text:{
    fontSize:30
  },
  footer_view:{
    flex:3,
    alignItems:'center',
    justifyContent:'center',
  },
  footer_text:{
    marginTop:20,
    fontSize:20,
    marginBottom:10
  },
  textinput_view:{
    alignItems:'center'
  },
  login_box:{
    backgroundColor:"#fff",
    alignItems:'center',
    justifyContent:'center',
    //backgroundColor:'yellow',
    width: 300,
    borderRadius:20,
  },
  input_text:{
    color:'red',
    backgroundColor:'green',
    borderColor:'#fff',
    height:30,
    width:200,
    borderRadius:20,
    paddingLeft:15,
  },
  main_button:{
    backgroundColor:'blue',
    width:150,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    borderRadius:20
  },
  login_headertext:{
    fontSize:50
  },
  secondary_button:{
    margin:10,
  }
});
