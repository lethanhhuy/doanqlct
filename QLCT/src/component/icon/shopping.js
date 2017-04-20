'use strict'
import React,{Component} from 'react';
import{
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


const window=Dimensions.get('window');

export default class Shopping extends Component{
  render(){
    return(
      <View style={styles.backGround}>
        <View style={styles.header}>
            <TouchableOpacity onPress={this.props.clickBackCate}>
              <Image
                style={{width: 30, height: 30, marginLeft: 5}}
                source={require('QLCT/images/previous.png')}
              />
            </TouchableOpacity>
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
              <View style={styles.the}>
                <Image
                  style={{width: 50, height: 50, marginLeft: 10}}
                  source={require('QLCT/images/Shopping/matkinh.png')}
                />
                <Text style={styles.cate_text}>Mắt kính</Text>
              </View>
              <View style={styles.the}>
                <Image
                  style={{width: 50, height: 50, marginLeft: 10}}
                  source={require('QLCT/images/Shopping/giaythethao.png')}
                />
                <Text style={styles.cate_text}>Giày thể thao</Text>
              </View>
              <View style={styles.the}>
                <Image
                  style={{width: 50, height: 50, marginLeft: 10}}
                  source={require('QLCT/images/Shopping/giaycaogot.png')}
                />
                <Text style={styles.cate_text}>Giày cao gót</Text>
              </View>
              <View style={styles.the}>
                <Image
                  style={{width: 50, height: 50, marginLeft: 10}}
                  source={require('QLCT/images/Shopping/aothun.png')}
                />
                <Text style={styles.cate_text}>Áo</Text>
              </View>
              <View style={styles.the}>
                <Image
                  style={{width: 50, height: 50, marginLeft: 10}}
                  source={require('QLCT/images/Shopping/vay.png')}
                />
                <Text style={styles.cate_text}>Váy</Text>
              </View>
              <View style={styles.the}>
                <Image
                  style={{width: 50, height: 50, marginLeft: 10}}
                  source={require('QLCT/images/Shopping/tuixach.png')}
                />
                <Text style={styles.cate_text}>Túi xách</Text>
              </View>
              <View style={styles.the}>
                <Image
                  style={{width: 50, height: 50, marginLeft: 10}}
                  source={require('QLCT/images/Shopping/quatang.png')}
                />
                <Text style={styles.cate_text}>Quà tặng</Text>
              </View>
              <View style={styles.the}>
                <Image
                  style={{width: 50, height: 50, marginLeft: 10}}
                  source={require('QLCT/images/next.png')}
                />
                <Text style={styles.cate_text}>Khác</Text>
              </View>
            </View>
        </ScrollView>

        <View style={styles.button}>
          <TouchableOpacity onPress={this.props.clickToMain}>
            <Text style={styles.textButton}>Thêm chi</Text>
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
    justifyContent:'space-between',
    marginBottom:5
  },
  backGround:{
    flex:1,
    backgroundColor:'#eef7ff',
    alignItems: 'center',
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

  },
  total:{

    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  the:{
    height:70,
    width:window.width/1.05,
    marginLeft:5,
    marginRight:5,
    backgroundColor:"#99c4ff",
    alignItems:'center',
    borderRadius:10,
    flexDirection:"row",
    marginBottom:3
  },
  the_text:{
    fontSize:20,
    color:"#003c8e",
    marginLeft:15
  }
})
