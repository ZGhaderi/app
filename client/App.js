import React, { Component } from 'react';
import io from 'socket.io-client';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';
//import console = require('console');

export default class App extends Component {	
  constructor() {
    super();
 
    this.state = {
      data_in: "",
      inputs: [],
      d:"",
    };
  }
 
  componentDidMount() {
    this.socket = io("http://192.168.1.5:3000");
    this.socket.on("chat message", msg =>{
      this.setState({inputs:[...this.state.inputs, msg]});
      //console.log("recieved : "+ msg);
    })
  }

  click(){
    this.socket.emit("chat message",this.state.data_in);
    //this.socket.emit("input message", this.state.data_in);
    //console.log(data_in);
    this.setState({d : this.state.data_in});
    this.setState({data_in:""});
  }
  render() {
    const inputs = this.state.inputs.map(data_in => <Text key={data_in}>{data_in}</Text>)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Press button to connect to server!
        </Text>
        <TextInput 
        style={styles.input} 
        placeholder="data_in" 
        autoCorrect={false} 
        onChangeText={(data_in)=>this.setState({data_in})} 
        onSubmitEditing={() => this.click()}
        value={this.state.data_in}
        />
        <Text style={styles.text}>data_in is : {this.state.d}</Text>
        {inputs}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
  },
  text: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  input: {
    height: 40,
    borderWidth: 2,
    //padding: 40
  },
});
 