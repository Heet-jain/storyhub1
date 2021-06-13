import React from 'react';
import { Text, TouchableOpacity, View , StyleSheet, TextInput, Image} from 'react-native';
import * as Permissions from 'expo-permissions'
import {BarCodeScanner} from 'expo-barcode-scanner'

export default class WriteStoryScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            hasCameraPermissions: null,
            scanned: false,
            scannedBookId: '',
            scannedStudentId: '',
            buttonState: 'normal'
        }
    }

    getCameraPermissions = async(Id) => {
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermissions: status === 'granted',
            buttonState: Id,
            scanned:false
        });
    }


    handleBarCodeScanned = async({type,data})=> {
      const {buttonState}=this.state.buttonState
      if(buttonState === 'BookId'){
        this.setState({
          scanned: true,
          scannedBookId: data,
          buttonState: 'normal'
        })
      }
      else if(buttonState === 'StudentId'){
        this.setState({
          scanned: true,
          scannedStudentId: data,
          buttonState: 'normal'
        })
      }

    }

    render(){
        return(
          <View styles={styles.container}>
          <View >
          <Text style={{textAling: 'center', fontSize: 30, backgroundColor: 'lightgreen'}}>StoryHub</Text>
          </View>

          <View style={styles.inputView}>
           <TextInput
           style={styles.inputBox}
           placeholder="TItle of a Story"
             /> 

          </View>

          <View style={styles.inputView}>
           <TextInput
           style={styles.inputBox}
           placeholder="Author of story"
           /> 
          </View>

                
           <TextInput
            style={styles.inputBox}
            placeholder="Write your story here"
             />


                
          </View>        
            )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alingItems: 'center',
        backgroundColor: 'lightgreen'
    },
    displayText:{
        fontSize: 15,
        textDecorationLine: 'underline'
    },
    scanButton:{
        backgroundColor: '#2196F3',
        padding: 10,
        margin :10
    },
    buttonText:{
        fontSize: 15,
        textAling: 'center',
        marginTop: 10
    },
    inputView:{
        flexDirection: 'row',
        margin :20
    },
    inputBox:{
        width:200,
        height: 40,
        borderWidth: 1.5,
        borderRightWidth: 1.5,
        fontSize: 20,
        backgroundColor: 'white'
    },
    storyBox:{
        width:200,
        height: 200,
        borderWidht: 1.5,
        borderRightWidth: 1.5,
        fontSize: 20,
        backgroundColor: 'white'
    },
})