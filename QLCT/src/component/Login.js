import React, { Component } from 'react';
import Firebase from 'QLCT/src/component/Firebase.js';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
  Image,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Dimensions,
} from 'react-native';


export default class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      ghi:'',
      doc:'',
    };
  }

  save(Variable,value){
    AsyncStorage.setItem(Variable,value);
  }
  read(Variable){
    AsyncStorage.getItem(Variable).then((value)=>{
      this.setState({doc:value});
    }).done();
  }

  render(){
    console.log(AsyncStorage)
    return(
      <View style={{flex:1}}>
        <TouchableOpacity onPress={()=>{this.props.go()}}>
          <Text style={styles.ai}>
            Đăng Nhập
          </Text>
        </TouchableOpacity>

        <View style={{ paddingTop: 50}}>
          <TextInput placeholder={"Connect"} onChangeText={(ghi) => this.setState({ghi})}
            value={this.state.ghi}/>
        </View>
        <TouchableOpacity
          onPress={()=>{this.save("Cloud",this.state.ghi)}}>
          <Text>
            Lưu
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.read("Cloud")}}>
          <Text>
            Đọc
          </Text>
        </TouchableOpacity>
        <Text>
          {this.state.doc}
        </Text>
      </View>

    );
  }
}

const styles=StyleSheet.create({
  ai:{
    fontSize: 30,
    color: 'orange',
  }
});
