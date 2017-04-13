/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 'use strict'


 import React,{Component} from 'react';
 import SideMenu from 'react-native-side-menu';
 import ActionButton from 'react-native-circular-action-menu';
 import {Icon} from 'react-native-elements'
 import {
   AppRegistry,
   StyleSheet,
   Text,
   Image,
   TouchableOpacity,
   View,
   AsyncStorage,
   Navigator
 } from 'react-native';

 import Firebase from './src/component/Firebase.js';


 import Menu from 'QLCT/src/component/Menu.js';
 import Add from './src/component/Add.js';
 import Main from './src/component/Main.js';
 import Category from './src/component/Category.js';
 //import Intro from 'QLCT/src/component/Intro.js';
 import Login from 'QLCT/src/component/Login.js';
 import WebViewdemo from 'QLCT/src/component/WebViewdemo.js';

const _uri='./1489787906_49.png';

export default class QLCT extends Component {

  renderScene(route,navigator){
    switch (route.name){
      //case 'main': return(<Main clickDN={()=>{navigator.push({name:"login"});}}/>)
      case 'main': return( <Main
        clickAdd={()=>{navigator.push({name:"add"});}}
        clickDN={()=>{navigator.push({name:"login"});}}
        clickFB={()=>{navigator.push({name:"firebase"});}}
      /> );
      case 'add' : return( <Add clickCate={()=>{navigator.push({name:"cate"});}}/>);
      case 'cate': return( <Category clickMain={()=>{navigator.push({name:"main"});}}/>);
      case 'firebase': return ( <Firebase clickMain={()=>{navigator.push({name:"main"});}}/>);
      case "menu" : return(<Menu clickLogin={()=>{navigator.push({name:"login"});}}/>);
      case "login" : return(<Login go={()=>{navigator.push({name:"WebViewdemo"});}}/>);
      case "WebViewdemo" : return (<WebViewdemo pop={()=>{navigator.pop({name:"login"})}}/>);
    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{name:"main"}}
        renderScene={this.renderScene}
      />
    );
  }
}


const _styles = StyleSheet.create(
  {
    _f0:{
      backgroundColor: '#E0E0E0',
      flex:1,
    },
    _f1:{
      backgroundColor:'rgb(231, 76, 60)',
      height:50,
    },
    _top:{
      color:'#ecf0f1',
      backgroundColor:'rgb(231, 76, 60)',
      paddingTop: 10,
      paddingLeft: 60,
      fontWeight:'bold',
      fontSize:20,
    },
    actionButtonIcon: {
     fontSize: 20,
     height: 22,
     color: 'white',
   },
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  actionButtonIcon: {
   fontSize: 20,
   height: 22,
   color: 'white',
 },

});

AppRegistry.registerComponent('QLCT', () => QLCT);
