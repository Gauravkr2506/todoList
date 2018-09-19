import React, {Component} from 'react';
import {Platform,
     StyleSheet,
      Text,
       View,
       TextInput,
       ScrollView,
       TouchableOpacity,
       AsyncStorage 

} from 'react-native';
import { Icon } from "native-base";
import Note from './Note';
import DialogInput from 'react-native-dialog-input';

export default class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      noteArray:[],
      noteText:'',
      showPrompt:false
    };
    this._retrieveData = this._retrieveData.bind(this);
    this._storeData = this._storeData.bind(this);
    this.addNote = this.addNote.bind(this);

  }
  componentDidMount(){
    
    this._retrieveData()
  }

  async _retrieveData(){
    
    try { 
      let value = await AsyncStorage.getItem('state');
      let state = JSON.parse(value);
      
      
      if (state != null) {
        let d = Object.keys(state);
      let dd = d.join('---')
     
        this.setState({noteArray:state.noteArray,noteText:''});
       

      }else{
        this._storeData({noteArray:[],noteText:''})
      }
     } catch (error) {
       // Error retrieving data
     }
  }
 _storeData(state){
  
    try {
      let d = Object.keys(state);
      let dd = d.join('---')
      
      AsyncStorage.setItem('state', JSON.stringify(state));
    } catch (error) {
      // Error saving data
      
    }
  }

  render() {
    var notes = this.state.noteArray.map((val,key)=>{
      return <Note key={key} keyVal={key} val={val} deleteMethod={()=>this.deleteNode(key)} />
    });
    return (
      <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerText}>
      -Short Notes-
      </Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
      {notes}
      {
        !this.state.showPrompt ? null :(
          <DialogInput isDialogVisible={this.state.isDialogVisible}
            // title={"DialogInput 1"}
            message={"Write a Note"}
            hintInput ={"Note"}
            submitInput={ this.addNote }
            closeDialog={ () => {this.setState({showPrompt:false})}}>
          </DialogInput>
        )
      }
      
      </ScrollView>
      <View style={styles.footer}>
        {/* <TextInput style={styles.textInput}
        onChangeText={(noteText) => this.setState({noteText})}
        value={this.state.noteText}
        placeholder='Add Note'
        placeholderTextColor='white'
        underlineColorAndroid='transparent'
        >

        </TextInput> */}
      </View>
      <TouchableOpacity onPress={() => this.setState({showPrompt:true})} style={styles.addButton}>
        <Text style={styles.addButtonText}>
        <Icon name="plus" type='Feather' style={{ fontSize: 35, color: "#fff" }}/>
        </Text>
      </TouchableOpacity>
      
      </View>
    );
  }

  addNote(note){
    
    if(note){
      let d = new Date();
      this.state.noteArray.push({
        'date':d.getFullYear() +
        "/" + (d.getMonth() + 1) +
        "/" + d.getDate(),
        'note':note,
      });
      this.setState({noteArray:this.state.noteArray})
      // this.setState({noteText:''});
      this._storeData({noteArray:this.state.noteArray,noteText:''});
    }
    this.setState({showPrompt:false});
  }

  deleteNode(key){
    this.state.noteArray.splice(key,1);
    this.setState({noteArray:this.state.noteArray});
    this._storeData({noteArray:this.state.noteArray,noteText:''});
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  header:{
    backgroundColor:'#006924',
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth:18,
    borderBottomColor:'#ddd',
  },
  headerText:{
    color:'white',
    fontSize:18,
    padding:20,
  },
  scrollContainer:{
    flex:1,
    marginBottom:100,
  },
  footer:{
    position:'absolute',
    bottom:0,
    left:0,
    right:0,
    zIndex:10,
    backgroundColor:'#252525',
    height:70,
  },
  textInput:{
    alignSelf:'stretch',
    color:'#fff',
    padding:30,
    backgroundColor:'#252525',
    borderTopWidth:1,
    borderTopColor:'#ededed',

  },
  addButton:{
    position:'absolute',
    zIndex:11,
    right:20,
    bottom:90,
    backgroundColor:'#006924',
    width:70,
    height:70,
    borderRadius:35,
    alignItems:'center',
    justifyContent:'center',
    elevation:8,

  },
  addButtonText:{
    color:'#fff',
    fontSize:24
  }

 
});