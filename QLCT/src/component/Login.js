import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';



export default class Login extends Component {
  constructor(props){
    super(props);
    this.state={text: ''};
  }

  render(){
    return(
      <View style={{flex:1}}>
        <TouchableOpacity onPress={()=>{this.props.go()}}>
          <Text style={styles.ai}>
            Dang Nhap
          </Text>
        </TouchableOpacity>

        <View style={{flex:1}}>
          <TextInput placeholder={"Connect"} onChangeText={(text) => this.setState({text})}
            value={this.state.text}/>
        </View>
      </View>

    );
  }
}

const styles=StyleSheet.create({
  ai:{
    fontSize: 30,
    color: 'red',
  }
});
