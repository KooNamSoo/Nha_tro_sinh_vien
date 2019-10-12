import React,{Component} from 'react';
import {View,Text,StyleSheet,ScrollView,FlatList} from 'react-native';
import {createAppContainer} from 'react-navigation';
import AppNavigator from './AppNavigator';
import axios from 'axios';
axios.defaults.baseURL='http://localhost:3000';
const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component{
  
  render(){
    
    return(
       <AppContainer />
    )
  }
}
const styles=StyleSheet.create({
  container :{
    flex:1,
    alignItems:'stretch',
    justifyContent:'center',
    backgroundColor:'#FFF',
    paddingLeft:16,
    paddingRight:16
  }
})