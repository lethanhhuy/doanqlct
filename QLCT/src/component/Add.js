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
const window=Dimensions.get('window');
const styles = StyleSheet.create({
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
    backgroundColor:'#dbefff',
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
  }
});
export default class Add extends Component{
  constructor(props) {
   super(props);
   this.state = {
     text:'',
     money:''
   };
 }

  render(){
    return(
        <View style={styles.backGround}>
            <Text style={styles.total}>Tổng tiền là: 20 000 000 </Text>
            <TextInput
              style={{height: 60, width: 340, borderColor: 'gray', borderWidth: 1, marginTop: 100, marginBottom:10}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />

            <View style={styles.dong}>
              <View style={styles.cot}>
                <TouchableOpacity>
                  <Text style={styles.chu}> 1 </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.cot}><Text style={styles.chu}> 2 </Text></View>
              <View style={styles.cot}><Text style={styles.chu}> 3 </Text></View>

            </View>
            <View style={styles.dong}>
              <View style={styles.cot}><Text style={styles.chu}> 4 </Text></View>
              <View style={styles.cot}><Text style={styles.chu}> 5 </Text></View>
              <View style={styles.cot}><Text style={styles.chu}> 6 </Text></View>

            </View>
            <View style={styles.dong}>
              <View style={styles.cot}><Text style={styles.chu}> 7 </Text></View>
              <View style={styles.cot}><Text style={styles.chu}> 8 </Text></View>
              <View style={styles.cot}><Text style={styles.chu}> 9 </Text></View>

            </View>
            <View style={styles.dong}>
              <View style={styles.cot}><Text style={styles.chu}> C </Text></View>
              <View style={styles.cot}><Text style={styles.chu}> 0 </Text></View>
              <View style={styles.cot}><Text style={styles.chu}> . </Text></View>

            </View>
          <View style={styles.button}>
          <TouchableOpacity onPress={this.props.clickCate}>
            <Text style={styles.textButton}>Add Category</Text>
          </TouchableOpacity>
          </View>
        </View>

    );
  }
}
