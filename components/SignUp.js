import React,{Component} from "react";
import {View,Text,TextInput,ScrollView,StyleSheet} from 'react-native';
import BasicButton from "./BasicButton";
import LoginSignUpBtn from "./LoginSignUpBtn";
import { Picker } from "@react-native-picker/picker";
import ValidationComponent from 'react-native-form-validator';
export default class SignUp extends ValidationComponent{
    constructor(props)
    {
        super(props);
        this.state={
            name:'',
            email:'',
            ageGroup:'',
            password:'',
            confirmPassword:'',

        }
    }
    render(){
        return(
            <ScrollView style={styles.container}>
                <Text style={styles.title}>SignUp</Text>
                <View style={styles.form}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput style={styles.inputField} placeholder="Enter Your Name" 
                    value={this.state.name} onChangeText={(name)=>this.setState({name})}></TextInput>
                    <View style={styles.divider}></View>
                    <Text style={styles.label}>Email Address</Text>
                    <TextInput style={styles.inputField} keyboardType="email-address" placeholder="Enter Your Email" 
                    value={this.state.email} onChangeText={(email)=>this.setState({email})}></TextInput>
                    <View style={styles.divider}></View>


                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 60,
      paddingHorizontal: 30,
    },
  
    title: {
      fontWeight: '500',
      fontSize: 20,
      letterSpacing: 0.1,
      color: '#2E2E2E',
    },
  
    form: {
      marginVertical: 35,
    },
  
    label: {
      fontSize: 16,
      lineHeight: 18,
      color: '#666666',
      marginBottom: 3,
    },
  
    inputField: {
      fontSize: 14,
      borderWidth: 0,
      borderBottomWidth: 1,
      borderBottomColor: '#BFBFBF',
  paddingVertical: 6,
    },
  
    divider: {
      paddingVertical: 8,
    },
  
    log: {
      textAlign: 'center',
      marginVertical: 2,
      color: 'red',
    },
  
    signin: {
      marginVertical: 40,
    },
  });

