import React,{ Component } from 'react';
import { View, StyleSheet, Text,Platform,StatusBar, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { SafeAreaView } from 'react-navigation';
import {Picker,Item  } from "native-base";
import DatePicker from 'react-native-datepicker';
  

class Survey extends Component{
    constructor(){
        super();
        this.state={
            questList : [
                {
                    id:1,
                    question:"What symptoms are you experiencing?",
                    answer:"",
                    error:""
                },
                {
                    id:2,
                    question:"Since when you are feeling this symptoms?",
                    answer:"",
                    error:""
                },
                {
                    id:3,
                    question:"Since when you are feeling this symptoms?",
                    answer:"",
                    error:""
                },
            ],

        }
    }
    RecordAnswer=(data, key)=>{
        this.state.questList.filter(function(item){return item.id == key})[0].answer = data;
        this.setState({questList:this.state.questList});
    }
    CheckAnswers = ()=> {
        this.state.questList.filter(function(item){return item.answer == ""}).map((question)=>(question.error = "Field cant be empty"));
        this.setState({questList:this.state.questList});
        this.props.navigation.navigate('Home');
    }
    render(){
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.header_text}>Answer questions</Text>
            </View>            
            <ScrollView>
                {this.state.questList.map((que, index)=>(
                    <View>
                    <Text style={styles.questionStyle}>
                        {que.id}. {que.question}
                    </Text>
                    <TextInput
                        style={styles.answerStyle}
                        onChange = {()=>(que.error = "")}
                        onChangeText = {value=>{this.RecordAnswer(value, que.id)}}
                    >
                    </TextInput>
                    <Text style={{color:'red'}}>{que.error}</Text>
                    </View>
                ))}  
                <DatePicker
                style={styles.datePickerStyle}
                //date={} // Initial date from state
                mode="date" // The enum of date, datetime and time
                placeholder="select date"
                format="DD-MM-YYYY"
                minDate="01-01-2016"
                maxDate="01-01-2022"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                //   dateIcon: {
                //     //display: 'none',
                //     position: 'absolute',
                //     left: 0,
                //     top: 4,
                //     marginLeft: 0,
                //   },
                //   dateInput: {
                //     marginLeft: 36,
                //   },
                }}
                // onDateChange={(date) => {
                //   setDate(date);
                // }}
              />
                <TouchableOpacity
                    style={styles.submitBtn}
                    onPress={this.CheckAnswers}
                >
                    <Text style={{color:'white', fontSize:20}}>Save</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    header:{
        padding:10,
        backgroundColor:'green',
        alignSelf:'stretch',
        alignItems:'center'
    },
    header_text:{
        color:'red',
        fontSize:20
    },
    questionStyle:{
        paddingTop:10,
        fontSize:18
    },
    answerStyle:{
        borderColor:'#000',
        backgroundColor:'#fed',
        borderRadius:30,
        height:40,
        paddingLeft:20,
        margin:10
    },
    submitBtn:{
        backgroundColor : 'blue',
        alignItems:'center',
    },
    datePickerStyle:{

    }

});


export default Survey;