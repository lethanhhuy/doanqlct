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
  TouchableOpacity
}from 'react-native';
import {Button} from 'react-native-elements';

import Firebase from 'QLCT/src/component/Firebase.js';
import firebase from 'firebase';

var moeny_total = 0;
const window=Dimensions.get('window');

export default class Sub extends Component{
  constructor(props) {
   super(props);
   this.state = {
     text:'',
     money:'',
     a: "1",
     clear_text:''
   };
 }
 click(e){
   this.setState({
     money_total: this.state.text +e,
     text: this.state.text + e
   });
 }
 clear(){
   this.setState({
     text: this.state.clear_text
   });
 }



  render(){
    return(
        <View style={styles.backGround}>

          <View style={styles.header}>
              <TouchableOpacity onPress={this.props.clickBack}>
                <Image
                  style={{width: 30, height: 30, marginLeft: 5}}
                  source={require('QLCT/images/previous.png')}
                />
              </TouchableOpacity>
              <Text style={styles.header_text}>Nhập số tiền chi</Text>

          </View>

            <View style={styles.text_input}>
              <Text style={styles.font_ti}>{this.state.text}</Text>
            </View>

            <View style={styles.dong}>
              <View style={styles.cot}>
                <TouchableOpacity onPress = {()=> {this.click("1")}}>
                  <Text style={styles.chu}> 1 </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.cot}>
                  <TouchableOpacity onPress = {()=> {this.click("2")}}>
                    <Text style={styles.chu}> 2 </Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.cot}>
                <TouchableOpacity onPress = {()=> {this.click("3")}}>
                  <Text style={styles.chu}> 3 </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.cot}>
                <TouchableOpacity onPress = {()=> {this.click("")}}>
                  <Text style={styles.chu}> + </Text>
                </TouchableOpacity>
              </View>

            </View>
            <View style={styles.dong}>
              <View style={styles.cot}>
                <TouchableOpacity onPress = {()=> {this.click("4")}}>
                  <Text style={styles.chu}> 4 </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.cot}>
                <TouchableOpacity onPress = {()=> {this.click("5")}}>
                  <Text style={styles.chu}> 5 </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.cot}>
                <TouchableOpacity onPress = {()=> {this.click("6")}}>
                  <Text style={styles.chu}> 6 </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.cot}>
                <TouchableOpacity onPress = {()=> {this.click("")}}>
                  <Text style={styles.chu}> - </Text>
                </TouchableOpacity>
              </View>

            </View>
            <View style={styles.dong}>
              <View style={styles.cot}>
                <TouchableOpacity onPress = {()=> {this.click("7")}}>
                  <Text style={styles.chu}> 7 </Text>
                </TouchableOpacity></View>
              <View style={styles.cot}>
                <TouchableOpacity onPress = {()=> {this.click("8")}}>
                  <Text style={styles.chu}> 8 </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.cot}>
                <TouchableOpacity onPress = {()=> {this.click("9")}}>
                  <Text style={styles.chu}> 9 </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.cot}>
                <TouchableOpacity onPress = {()=> {this.click("")}}>
                  <Text style={styles.chu}> * </Text>
                </TouchableOpacity>

              </View>
            </View>
            <View style={styles.dong}>
              <View style={styles.cot}>
                <TouchableOpacity onPress = {()=> {this.clear()}}>
                  <Text style={styles.chu}> C </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.cot}>
                <TouchableOpacity onPress = {()=> {this.click("0")}}>
                  <Text style={styles.chu}> 0 </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.cot}>
                <TouchableOpacity onPress = {()=> {this.click("000")}}>
                  <Text style={styles.chu}> 000 </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.cot}>
                <TouchableOpacity onPress = {()=> {this.click("")}}>
                  <Text style={styles.chu}> / </Text>
                </TouchableOpacity>
              </View>
            </View>

          <View style={styles.button}>
            <TouchableOpacity onPress={this.props.clickCate}>
              <Text style={styles.textButton}>Thêm mục</Text>
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
  button:{
    marginTop:2,
    height:50,
    width:150,
    backgroundColor:'#99c4ff',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
  },
  textButton:{
    fontSize: 20,
    color: '#003c8e'
  },
  text_input:{
     height: 60,
     width: 340,
     borderColor: 'green',
     borderWidth: 1,
     marginTop: 100,
     marginBottom:10,
     justifyContent:'center',
     alignItems:'center'
  },
  font_ti:{
    color:'black',
    fontSize:30
  }
});
