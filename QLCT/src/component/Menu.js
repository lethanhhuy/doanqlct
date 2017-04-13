'use strict'
import React,{Component} from 'react';
import Firebase from 'QLCT/src/component/Firebase.js';
import SideMenu from 'react-native-side-menu';
import Login from 'QLCT/src/component/Login.js';
import{
  AppRegistry,
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  Image,
  View,
  TouchableOpacity,
  Navigator,
}from 'react-native';

const window=Dimensions.get('window');

const styles = StyleSheet.create({
  menu:{
    flex:1,
    width: window.width,
    height:window.height,
    backgroundColor:'#e2ffef',
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
  }
});

export default class Menu extends Component{
   static propTypes = {
     onItemselected: React.PropTypes.func.isRequired,
   };
   render(){
     return(
       <ScrollView scrollstoTop={false} style={styles.menu}>
         <View style={styles.avatarContainer}>
           <Image
             style={{height:60, width: 60, borderRadius: 30}}
             source={require("QLCT/images/avatar.jpg")}
            />
           <Text style={styles.name}>Quản Lý Chi Tiêu</Text>
         </View>
         <Text
           onPress={() =>{this.props.onItemselected('Tài Khoản')}}
           style={styles.item}>
           Tài Khoản
         </Text>
         <Text
           onPress={() =>{this.props.onItemselected('Ngân Sách')}}
           style={styles.item}>
           Ngân Sách
         </Text>
         <Text
           onPress={() =>{this.props.onItemselected('Báo Cáo')}}
           style={styles.item}>
           Báo Cáo
         </Text>
        <TouchableOpacity onPress={()=>{this.props.onItemselected(Login)}}>
           <Text style={styles.item}>
             Đăng Nhập
           </Text>
        </TouchableOpacity>
       </ScrollView>
     );
   }
}
