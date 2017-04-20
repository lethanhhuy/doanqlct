'use strict'
import React,{Component} from 'react';
import{
  AppRegistry,
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback
}from 'react-native';
import {Button} from 'react-native-elements';
const window=Dimensions.get('window');

export default class Category extends Component{
  render(){
    return(
      <View style={styles.backGround}>

      <View style={styles.header}>
          <TouchableOpacity onPress={this.props.clickBackSub}>
            <Image
              style={{width: 30, height: 30, marginLeft: 5}}
              source={require('QLCT/images/previous.png')}
            />
          </TouchableOpacity>
          <Text style={styles.header_text}>Chọn mục cho tiền chi</Text>

      </View>

        <View style={{marginBottom: 100}}></View>
        <View style={styles.dong}>
          <View style={styles.cot}>
            <TouchableOpacity onLongPress={this.props.clickShopping}>
                <Image
                  style={{height: 50, width: 50}}
                  source={require('QLCT/images/Icons/shopping.png')}/>
                <Text>Mua sắm</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cot}>
          <Image
            style={{height: 50, width: 50}}
            source={require('QLCT/images/Icons/healthy.png')}/>
            <Text>Sức khỏe</Text>
          </View>
          <View style={styles.cot}>
          <Image
            style={{height:50, width: 50}}
            source={require('QLCT/images/Icons/pets.png')}/>
            <Text>Thú cưng</Text>
          </View>
          <View style={styles.cot}>
          <Image
            style={{height:50, width: 50}}
            source={require('QLCT/images/Icons/house.png')}/>
            <Text>Nhà cửa</Text>
          </View>
        </View>
        <View style={styles.dong}>
          <View style={styles.cot}></View>
          <View style={styles.cot}></View>
          <View style={styles.cot}></View>
          <View style={styles.cot}></View>
        </View>
        <View style={styles.dong}>
          <View style={styles.cot}></View>
          <View style={styles.cot}></View>
          <View style={styles.cot}></View>
          <View style={styles.cot}></View>
        </View>
        <View style={styles.dong}>
          <View style={styles.cot}></View>
          <View style={styles.cot}></View>
          <View style={styles.cot}></View>
          <View style={styles.cot}></View>
        </View>
        <View style={styles.button}>
        <TouchableOpacity onPress={this.props.clickMain}>
          <Text style={styles.textButton}>Thêm chi</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header_text:{
    marginRight:window.width/5,
    fontSize:20,
    color:'black'
  },
  header:{
    backgroundColor: "#e56100",
    height: window.height/17,
    width: window.width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  menu:{
    flex:1,
    width: window.width,
    height:window.height,
    backgroundColor:'#ecf0f1',
    padding:20,
  },

  avatarContainer:{
    marginBottom:20,
    marginTop:20,
  },

  avartar:{
    width:48,
    height:48,
    borderRadius:24,
    flex:1,
  },
  name:{
    position:'absolute',
    left:70,
    top:20,
  },
  item:{
    fontSize:16,
    fontWeight:'300',
    paddingTop: 40,
  },
  backGround:{
    flex:1,
    backgroundColor:'#eef7ff',
    alignItems: 'center',
  },
  dong:{
    borderBottomWidth:0.5,
    borderBottomColor:'#003c8e',
    flex:1,
    flexDirection:'row',

  },
  cot:{
    marginLeft:1,
    marginBottom:1,
    backgroundColor:'#99c4ff',
    borderRightColor: '#003c8e',
    borderRightWidth:0.5,
    flex:1,
    justifyContent:'center', alignItems:'center'
  },
  number:{
    fontSize: 50,

  },
  chu:{
    color:'#003c8e',
    fontSize: 30,
    justifyContent:'center', alignItems:'center'
  },
  number1:{
    fontSize: 50,
    paddingBottom: 18,
  },
  o:{
    backgroundColor:'#99c4ff'
  },
  total:{
    marginTop:10,
    fontSize: 25,
    color: '#003c8e'
  },
  textButton:{
    fontSize: 20,
    color: '#003c8e'
  },
  button:{
    marginTop:2,
    height:50,
    width:150,
    backgroundColor:'#99c4ff',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
  },
});
