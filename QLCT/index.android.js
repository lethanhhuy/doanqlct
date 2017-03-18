/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 'use strict'

 import React,{Component} from 'react';
 import SideMenu from 'react-native-side-menu';
 import Menu from './src/component/Menu.js';
 import ActionButton from 'react-native-circular-action-menu';

 import {
   AppRegistry,
   StyleSheet,
   Text,
   Image,
   TouchableOpacity,
   View,
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
  render() {
    const menu=<Menu onItemselected={this.onMenuItemselected} />;
    return (
      <SideMenu
         menu={menu}
         isOpen={this.state.isOpen}
         onChange={(isOpen) => this.updateMenuState(isOpen)}>
         <View style={_styles._f0}>
           <View style={_styles._f1}>
             <Text style={_styles._top}>Tổng Quan</Text>
           </View>
           <Text style={styles.welcome}>
             Welcome to React Native!
           </Text>
           <Text style={styles.instructions}>
             Press Cmd+R to reload,{'\n'}
             Cmd+D or shake for dev menu
           </Text>
           <Text style={[styles.instructions,{color:'red'}]}>
              DevTeam:{this.state.selectedItem}
           </Text>
          <Button style={_styles.Button} onPress={() => this.toggle()}>
            <Image
              source={{uri:_uri,width:32,height:32,}} />
          </Button>
          <ActionButton buttonColor='rgba(231,76,60,1)'>
            <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
                <Text>
                  A
                </Text>
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
              <Text>
                B
              </Text>
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
              <Text>
                C
              </Text>
            </ActionButton.Item>
          </ActionButton>
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
