/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 'use strict'


 import React,{Component} from 'react';
 import SideMenu from 'react-native-side-menu';
 import Menu from 'QLCT/src/component/Menu.js';
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
   Navigator,
 } from 'react-native';

 const _uri='./1489787906_49.png';

export default class QLCT extends Component {
  constructor(props){
    super(props);
    this.state={
     isOpen: false,
     selectedItem: 'About',
    };
  }

  toggle(){
    this.setState({
      isOpen:!this.state.isOpen,
    });
  }

  updateMenuState(isOpen){
    this.setState({isOpen: isOpen});
  }

  onMenuItemselected=(item) =>{
     this.setState({
       isOpen:false,
       selectedItem:item,
     });
  }
  renderScene(route,navigator){
    switch (route.name){
      case 'add': return( <Add/> );
    }
  }
  render() {
    const menu=<Menu onItemselected={this.onMenuItemselected} />;
    return (
      <SideMenu
         menu={menu}
         isOpen={this.state.isOpen}
         onChange={(isOpen) => this.updateMenuState(isOpen)}>
         <View style={_styles._f0}>
           <View style={_styles._f1}>
            <Image style={{marginLeft:5,marginTop:7,height:35,width:35}}
              source={require('QLCT/images/menu.png')}
            />
             <Text style={_styles._top}>Tổng Quan</Text>
            </View>
          <View style={{justifyContent:'center', alignItems:'center'}}>
            <Image
                style={{height:200, width:200, marginTop:150}}
                source={require('QLCT/images/chart.png')}
            />
          </View>
          <View style={{justifyContent:'center', alignItems:'center', marginTop: 100}}>
            <TouchableOpacity
              onPress={this.props.clickAdd}>
              <Image style={{height:100,width:100}}
                source={require('QLCT/images/add.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SideMenu>
    );
  }
}


class Button extends Component{
  handlePress(e){
    if(this.props.onPress){
      this.props.opPress(e);
    }
  }
  render(){
    return(
      <TouchableOpacity
        onPress={this.handlePress.bind(this)}
        style={this.props.styles}>
        <Text>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

const _styles = StyleSheet.create(
  {
    chart: {
       width: 50,
       height: 50,
   },
    _f0:{
      backgroundColor: '#dbefff',
      flex:1,
    },
    _f1:{
      flexDirection:'row',
      backgroundColor:'#003c8e',
      height:50,
    },
    _top:{
      color: 'white',
      backgroundColor:'#003c8e',
      paddingTop: 10,
      paddingLeft:20,
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
