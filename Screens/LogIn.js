import React, { Component } from 'react';
import {View, StyleSheet, TouchableOpacity, Platform, Dimensions, Text, Image, Button, TextInput, KeyboardAvoidingView, AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {WebCallClass} from "../Components/WebCallClass";

var WebCall = new WebCallClass();



export default class LogIn extends Component {
    constructor(){
        super();
        this.getData();
        this.state= {
            user:[],
            pass:[],
            token: "",
        }
    }
    
    



    login = async () => {
      var result = await WebCall.login(this.state.user,this.state.pass)
        if (result === 1) {

            Actions.Main({idcateg: 0});
            

        } else {

       alert('incorect user and pass')
    }
      //


    }

     onLoginPress = async () =>{
        this.setState({token:"abc123"})
        await AsyncStorage.setItem('token','abc123')
        await AsyncStorage.setItem('user',this.state.user)
        await AsyncStorage.setItem('pass',this.state.pass)



        this.login()


    }

    getData = async () => {
        try{
            const value = await AsyncStorage.getItem('token')
            const user = await AsyncStorage.getItem('user')
            const pass = await AsyncStorage.getItem('pass')
            if (value !== null){
                this.setState({token:value})
            }
            if (user !== null){
                this.setState({user})
            }
            if (pass !== null){
                this.setState({pass})
            }

        } catch(e){

        }
    }

  render() {
    return (
        <KeyboardAvoidingView
        style={styles.container}
    behavior="padding">


        <View style={{width: '100%', height : '50%', backgroundColor: '#2652bf', alignItems:"center",justifyContent:"center"}}>
            <View style={styles.dot}>
                <Image source={require("../images/iconfinder_home-house_2932347.png")} />
            </View>
        </View>


        <View style={{width: '100%', height : '50%', backgroundColor: '#ffffff',  }}>
            <TouchableOpacity style={styles.textSignUp} onPress={Actions.Register}>
                <Text style={{textAlign:"center"}} >Register</Text>
            </TouchableOpacity>

        </View>

        <View style={{elevation: 5, borderRadius : 30, position: 'absolute', top : '40%', width: 350, height : 360, backgroundColor: '#ffffff'}}>
            <View style={styles.footer}>
                <View style={{padding:15}}>
                    <Text style={styles.text_footer}>Username</Text>

                    <View style={styles.action}>
                        <TextInput style={{width: '100%',fontSize: 20}}
                            placeholder="username"
                            onChangeText={text => this.setState({user:text})}
                            value={this.state.user}
                        />
                    </View>
                </View>
                <View style={{padding:15}}>
                    <Text style={styles.text_footer}>Password</Text>
                    <View style={styles.action}>
                        <TextInput style={{width: '100%',fontSize: 20}}
                                   placeholder="password"
                                   onChangeText={text => this.setState( {pass:text})}
                                   value={this.state.pass}
                                   secureTextEntry={true}
                        />
                    </View>

                </View>
            </View>
        </View>

        <View style={{elevation:7, position:'absolute', width: 200, height : 70, borderRadius:50, bottom:"5%",  backgroundColor: '#2652bf', alignItems:"center", justifyContent:"center"}}>
           <TouchableOpacity  onPress={() => this.onLoginPress() }>
               <Text style={styles.text}>LogIn</Text>
           </TouchableOpacity>
            </View>


        </KeyboardAvoidingView>
    )
  }
}

const styles= StyleSheet.create({
    container:{
        flex:1,

        alignItems: 'center',
    },
    inputIcon:{
        fontSize: 20,
        marginLeft:15,
        justifyContent: 'center',
        color:'black'
    },
    header:{
        flex:1,
        justifyContent:"flex-end",
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer:{

        flex:3,
        backgroundColor:"#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 50,
        paddingHorizontal: 20,
        paddingVertical:30,


    },
    text:{
        color:"#fff",
        fontWeight: 'bold',
        fontSize: 30,

    },
    textSignUp:{
        top:"92%",
        textAlign:"center",
        fontWeight: 'bold'
    },

    dot: {
    height: "37%",
    width: "37%",
    backgroundColor: "#f2f2f2",
    borderRadius: 70,
    alignItems:"center",
    justifyContent:"center",

    },
    text_footer:{
        color:"#0352fc",
        fontSize: 18,
        padding:1,
        textAlign:"left"
    },
    action:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        paddingBottom: 10,


    },
    textInput:{
        flex: 1,
        marginTop: Platform.OS === "android" ? 0 : -12,
        paddingLeft: 10,
        color:"#05375a"
    },
    button:{
        alignItems: "center",

    },
    signIn:{
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign:{
        fontSize: 18,
        fontWeight: 'bold'
    }

})