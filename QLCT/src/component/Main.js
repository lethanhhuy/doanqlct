
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
   ScrollView
 } from 'react-native';

var money_total=0;
export default class Main extends Component {
  constructor(props){
    super(props);
    this.state={
     isOpen: false,
     selectedItem: 'About',
     money: '200.000.000',
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
            <TouchableOpacity onPress={() => this.props.clickMenu}>
             <Button style={_styles.Button} onPress={() => this.toggle()}>
               <Image
                 source={require('QLCT/images/ic_menu_white_36dp.png')} />
             </Button>
             </TouchableOpacity>
             <Text style={_styles._top}>Tổng Quan</Text>
            </View>

            <View style={{backgroundColor:"#ffb4b4", width:window.width,height:50, borderRadius:40,
            marginTop:5, marginLeft:5,marginRight:5,marginBottom:5,
            justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
              <Text style={{fontSize:20, color:"black",marginLeft:15}}>Số tiền hiện có: </Text>
              <Text style={{fontSize:20, color:"black"}}>{this.state.money}</Text>
              <Text style={{fontSize:20, color:"black",marginRight:15}}>Đ</Text>

            </View>

            <ScrollView>
                <View style={styles.total}>
                  <View style={styles.the}>
                    <Image
                      style={{width: 50, height: 50, marginLeft: 10}}
                      source={require('QLCT/images/Shopping/non.png')}
                    />
                    <Text style={styles.cate_text}>Nón</Text>
                  </View>
                  <View style={styles.the}>
                    <Image
                      style={{width: 50, height: 50, marginLeft: 10}}
                      source={require('QLCT/images/Shopping/quan.png')}
                    />
                    <Text style={styles.cate_text}>Quần</Text>
                  </View>
                  <View style={styles.the}>
                    <Image
                      style={{width: 50, height: 50, marginLeft: 10}}
                      source={require('QLCT/images/Shopping/dongho.png')}
                    />
                    <Text style={styles.cate_text}>Đồng hồ</Text>
                  </View>
              </View>
            </ScrollView>

          <View style={{justifyContent:'center', alignItems:'center',flexDirection:'row',marginTop:5}}>
            <TouchableOpacity
              onPress={this.props.clickAdd}>
              <View style={{justifyContent:'center', alignItems:'center'}}>
              <Image style={{height:75,width:75, marginRight:50}}
                source={require('QLCT/images/add.png')}
              />
              <Text style={{marginRight:50}}>Thêm thu</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.props.clickSub}>
              <View style={{justifyContent:'center', alignItems:'center'}}>
              <Image style={{height:75,width:75, marginLeft:50}}
                source={require('QLCT/images/sub.png')}
              />
              <Text style={{marginLeft:50}}>Thêm chi</Text>
              </View>
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
      this.props.onPress(e);
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
      backgroundColor: '#eef7ff',
      flex:1,
    },
    _f1:{
      flexDirection:'row',
      backgroundColor:'rgb(231, 76, 60)',
      height:35,
    },
    _top:{
      color: 'white',
      backgroundColor:'rgb(231, 76, 60)',
      paddingTop: 1,
      paddingLeft:25,
      fontWeight:'bold',
      fontSize:20,
    },
    actionButtonIcon: {
     fontSize: 20,
     height: 22,
     color: 'white',
    },
    img:{
       paddingTop: 35,
       paddingLeft: 30,
       width:10,
       height:10,
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
 total:{
   flex:1,
   borderRadius:5,
   marginBottom:5,
   marginLeft:5,
   marginRight:5,
   marginTop:5,
   height:410

 },
 the:{
   height:50,
   width:window.width,
   marginLeft:5,
   marginRight:5,
   backgroundColor:"#99c4ff",
   alignItems:'center',
   borderRadius:10,
   flexDirection:"row",
   marginBottom:3,
 },
 the_text:{
   fontSize:15,
   color:"#003c8e",
   marginLeft:15
 },
 cate_text:{
   fontSize:18,
   color:"#003c8e",
   marginLeft:15
 },
 cate_the:{
   backgroundColor:'#99c4ff',
   width:window.width/1.05,
   height:70,
   marginLeft:5,
   marginRight:5,
   borderRadius:10,
   borderBottomColor: 'black',
   borderRightWidth:1,
   marginBottom:4,
   flexDirection:"row",
   alignItems:"center"
 },
 cate:{
   width:window.width/0.3,
   marginBottom:1,
   marginTop:window.height/10,
   backgroundColor:'#eef7ff',
   borderRightColor: '#003c8e',
   borderRightWidth:0.5,
   flex:1,
   justifyContent:'center',
   alignItems:'center'
 },
});
