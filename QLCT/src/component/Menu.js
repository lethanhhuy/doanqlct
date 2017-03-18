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
}from 'react-native';

const window=Dimensions.get('window');
const uri='1489787906_49.png';

const styles = StyleSheet.create({
  menu:{
    flex:1,
    width: window.width,
    height:window.height,
    backgroundColor:'gray',
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
    paddingTop: 10,
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
             style={styles.avatar}
             source={{uri:uri}}/>
           <Text style={styles.name}>Tên người dùng</Text>
         </View>
         <Text
           onPress={() =>this.props.onItemselected('abc')}
           style={styles.item}>
           xyz
         </Text>
         <Text
           onPress={() =>this.props.onItemselected('123')}
           style={styles.item}>
           456
         </Text>
       </ScrollView>

     );
   }
}
