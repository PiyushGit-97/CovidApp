
import React, { useState } from 'react';
import { 
    ImageBackground, Platform, SafeAreaView, StyleSheet, Text, StatusBar, View, TextInput, 
    TouchableOpacity, Alert, } from 'react-native';

const LoginScreen = ({navigation })=>{
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const validateCredentials = () => {
      if(userName == 'Piyush' && password == 'pass@123'){
        return true;
      }
      return false;
    }
  
    const checkCredentials = () =>{
      if(validateCredentials()){
        navigation.navigate('Survey');
      }
      else{
        alert('log in failed');
      }
    }
  
    return (
      <SafeAreaView style={styles.container}>
       <ImageBackground
        source={require("../assets/LoginImage.jpg")} style={styles.image}>
        <View style={styles.header_view}>
          <Text style={styles.header_text}>Welcome</Text>
        </View>      
  
        <View style={styles.footer_view}>
          <View style={styles.login_box}>
            <View>
              <Text style={styles.login_headertext}>Log In</Text>
            </View>
            <View style={styles.textinput_view}>
              <Text style={styles.footer_text}>User Name</Text>
              <TextInput 
                style={styles.input_text}
                onChangeText={(value)=>setUsername(value)}
                autoCapitalize="none"
              ></TextInput>
            </View>
            <View style={styles.textinput_view}>
              <Text style={styles.footer_text}>Password</Text>
              <TextInput style={styles.input_text}
                onChangeText={(value)=>setPassword(value)}
                autoCapitalize="none"
                secureTextEntry
              ></TextInput>
            </View>
            <View style={styles.textinput_view}>
              <TouchableOpacity style={styles.main_button} onPress={checkCredentials}>
                <Text>Log In</Text>
              </TouchableOpacity>
              <Text  style={styles.secondary_button}> New here? 
                <TouchableOpacity onPress={()=>Alert.alert(
                    'Sign up',
                    'Under Development',
                    [
                        {
                            text:"Remind me",
                            //onPress: () => console.log("Cancel Pressed"),
                            style: "cancel"
                        },
                        {
                            text:"Ok",
                            //onPress: () => console.log("Ok Pressed"),
                            style: "cancel"
                        }
                    ]
                    )}>
                  <Text style={{
                    color:'darkblue',
                    textDecorationLine:'underline'
                  }}> Sign Up</Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </View>
       </ImageBackground>
      </SafeAreaView>
    );
  };

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

  export default LoginScreen;