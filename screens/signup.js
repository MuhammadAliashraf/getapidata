import React from 'react'
import { Button, TextInput, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

function Signup() {
    return (
        <View style={styles.container} >
            <View style={styles.div} >
                <View>
                    <Text style={styles.maintext} >Signup</Text>
                    <View style={styles.introtext}  >
                        <Text style={styles.bodymain} >Connect With Us</Text>
                    </View>
                </View>
                <View  style={styles.txtinputs}  >
                    <TextInput style={styles.email} placeholderTextColor="white" placeholder='Enter Email' />
                    <TextInput style={styles.email} placeholderTextColor="white" placeholder='Enter UserName' />
                    <TextInput style={styles.email} placeholderTextColor="white" placeholder='Enter Password' />
                    <TextInput style={styles.email} placeholderTextColor="white" placeholder='Confrim Password' />
                    <View style={styles.mybtn} >
                        <Button color='orange' title='Signup' />
                    </View>
                    <View style={styles.mybtn2} >
                        <Button color='orange'  title='Login' />
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // top: 200,
        bottom: 550,
        flex: 1,
        backgroundColor: "orange",
        alignItems: 'center',
        borderRadius: 20,
    },
    div: {
        top: 500,
    },
    maintext: {
        // bottom:90,
        color: 'white',
        top: 230,
        right: -110,
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center'
    },
    bodymain: {
        backgroundColor:'black',
        padding:10,
        borderRadius:10,
        color: 'orange',
        top: 100,
        right: 40,
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: 'center'
    },
    bodysmall: {
        color: 'black',
        top: 120,
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
        bottom:90,
    },
    email: {
        top: 250,
        paddingLeft: 10,
        color: 'orange',
        borderRadius: 10,
        marginTop: 30,
        width: 300,
        // opacity:.3,
        backgroundColor: "black",
        borderColor: "orange",
        borderWidth: 1,
    },
    mybtn: {
        borderRadius: 20,
        top: 290,
    },
    mybtn2:{
        top: 310,
    }
})

export default Signup
