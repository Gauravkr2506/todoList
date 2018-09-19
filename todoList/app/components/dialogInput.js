import DialogInput from 'react-native-dialog-input';
import React, {Component} from 'react';
export default class DialogInput extends React.Component{
    render() {
        return(
            <DialogInput isDialogVisible={this.state.isDialogVisible}
            // title={"DialogInput 1"}
            message={"Write a note"}
            hintInput ={"Note"}
            submitInput={ (inputText) => {this.sendInput(inputText)} }
            closeDialog={ () => {this.showDialog(false)}}>
            </DialogInput>
        );
    }
    
}