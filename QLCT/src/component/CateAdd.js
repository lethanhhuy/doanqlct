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

export default class CateAdd extends Component{
  render(){
    return(
      <View style={styles.backGround}>

      <View style={styles.header}>
          <TouchableOpacity onPress={this.props.clickBackAdd}>
            <Image
              style={{width: 30, height: 30, marginLeft: 5}}
              source={require('QLCT/images/previous.png')}
            />
          </TouchableOpacity>
          <Text style={styles.header_text}>Chọn mục cho tiền thu</Text>

      </View>

          <View style={styles.cate}>
            <View style={styles.cate_the}>
              <Image
                style={{width: 50, height: 50, marginLeft: 10}}
                source={require('QLCT/images/salary.png')}
              />
              <Text style={styles.cate_text}>Lương</Text>
            </View>
            <View style={styles.cate_the}>
              <Image
                style={{width: 50, height: 50, marginLeft: 10}}
                source={require('QLCT/images/salary.png')}
              />
              <Text style={styles.cate_text}>Trúng số</Text>
            </View>

            <View style={styles.cate_the}>
              <Image
                style={{width: 50, height: 50, marginLeft: 10}}
                source={require('QLCT/images/salary.png')}
              />
              <Text style={styles.cate_text}>Tiền thưởng</Text>
            </View>
            <View style={styles.cate_the}>
              <Image
                style={{width: 50, height: 50, marginLeft: 10}}
                source={require('QLCT/images/salary.png')}
              />
              <Text style={styles.cate_text}>Tiền lì xì má cho</Text>
            </View>
            <View style={styles.cate_the}>
              <Image
                style={{width: 50, height: 50, marginLeft: 10}}
                source={require('QLCT/images/salary.png')}
              />
              <Text style={styles.cate_text}>Khác</Text>
            </View>
          </View>

          <View style={styles.button}>
            <TouchableOpacity onPress={this.props.clickMain}>
              <Text style={styles.textButton}>Thêm thu</Text>
            </TouchableOpacity>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  cate_text:{
    fontSize:20,
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
    justifyContent:'space-between'
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
    flexDirection:'row',
    marginBottom:1
    },
});
