import React, {Component} from 'react';
import {Platform,
     StyleSheet,
      Text,
       View,
       TouchableOpacity,

} from 'react-native';

export default class Note extends React.Component{
  render() {
    return (
      <View key={this.props.keyVal} style={styles.note}>
      <Text style={styles.noteText}>{this.props.val.date}</Text>
      <Text style={styles.noteText}>{this.props.val.note}</Text>
     <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
     <Text style={styles.noteDeleteText}>X</Text>
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
    borderLeftColor:'#e91e63',

  },
  noteDelete:{
    position:'absolute',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#298eb9',
    padding:10,
    top:10,
    bottom:10,
    right:10,
  },
  noteDeleteText:{
    color:'white',
  }


 
});