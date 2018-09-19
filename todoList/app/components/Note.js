import React, {Component} from 'react';
import {Platform,
     StyleSheet,
      Text,
       View,
       TouchableOpacity,

} from 'react-native';
import { Icon, Badge } from "native-base";

export default class Note extends React.Component{
  render() {
    return (
      <View key={this.props.keyVal} style={styles.note}>
      <Text style={styles.noteText}>{this.props.val.date}</Text>
      <Text style={styles.noteText}>{this.props.val.note}</Text>
     <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
     <Text style={styles.noteDeleteText}>
     <Icon name="delete-forever" type='MaterialCommunityIcons' style={{ fontSize: 25, color: "#fff" }}/>
     </Text>
     </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    position:'relative',
    padding:20,
    paddingRight:100,
    borderBottomWidth:2,
    backgroundColor:'#ededed',

  },
  noteText:{
    paddingLeft:20,
    borderLeftWidth:10,
    borderLeftColor:'#0033b2',

  },
  noteDelete:{
    position:'absolute',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#3d0052',
    padding:4,
    
    top:20,
    right:10,
    borderRadius:22,
    width:40,
    height:40
  },
  noteDeleteText:{
    color:'white',
  }


 
});