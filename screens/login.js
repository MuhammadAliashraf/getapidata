import React from 'react'
import { Button, TextInput, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

function Login() {
    return (
        <View style={styles.container} >
            <View style={styles.div} >
                <View>
                    {/* <Text style={styles.maintext} >Login 4</Text> */}
                    <View style={styles.introtext}  >
                        <Text style={styles.bodymain} >Login Form</Text>
                        {/* <Text style={styles.bodysmall} >login to Continue!</Text> */}
                    </View>
                </View>
                <View  style={styles.txtinputs}  >
                    <TextInput style={styles.email} placeholderTextColor="white" placeholder='Enter Email' />
                    <TextInput style={styles.email} secureTextEntry={true} placeholder='Enter Password' placeholderTextColor="white" />
                    <View style={styles.mybtn} >
                        <Button color='black' title='Login' />
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // top: 190,
        height:50,
        flex: 1,
        backgroundColor: "orange",
        alignItems: 'center',
        borderRadius: 20,
    },
    div: {
        // top: 10,
    },
    maintext: {
        color: 'white',
        top: 100,
        right: 40,
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: 'center'
    },
    bodymain: {
        backgroundColor:"black",
        padding:10,
        borderRadius:20,
        color: 'white',
        top: 100,
        right: 40,
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: 'center'
    },
    bodysmall: {
        color: 'black',
        top: 100,
        right: 40,
        // fontSize: 30,
        fontWeight: 'light',
        // alignItems: 'center',
        justifyContent: 'center',
    },
    introtext: {
        // top: 10,
        left: 30,
        // justifyContent:'center',
        // alignContent:'center',
        alignItems: 'center',

    },
    txtinputs:{
        // top: 50,
        bottom:50,
    },
    email: {
        // placeholder:"black",
        top: 250,
        paddingLeft: 10,
        color: 'orange',
        borderRadius: 10,
        marginTop: 30,
        width: 300,
        // opacity:.3,
        backgroundColor: "black",
        borderColor: "black",
        borderWidth: 1,
    },
    mybtn: {
        borderRadius: 20,
        top: 290,
    }
})

export default Login
