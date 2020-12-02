import React,{Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, KeyboardAvoidingView, Image, TextInput} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {WebCallClass} from "../Components/WebCallClass";
import axios from 'axios';


var WebCall = new WebCallClass();

export default  class SignUp extends  Component{

    constructor(props){
        super(props);
        this.state = {
            username:[],
            email: [],
            pass:[],
            rpass:[],
            mailSent: false,
            error: null

        }



    }


    
     

//  componentDidMount(){


//      this.Register();

//  }

//  componentDidUpdate(){

//      this.Register();
//  }

Register = async () => {
 var   result = await WebCall.Register(this.state.username,this.state.pass,this.state.email)
  //   alert(result)

  

    Actions.LogIN();
    



}

onRegisterPress = async () =>{
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(this.state.email) === true){

    this.Register()
    } else {
        alert('introdu adresa de mail corespunzatoare')
    }

}



   render() {



    return (
        <KeyboardAvoidingView  style={styles.container} behavior="padding">
            <View style={{width:"100%", height:"50%", backgroundColor:"#2652bf", justifyContent:"center", alignItems:"center"}}>
                

            </View>

            <View style={{width:"100%", height:"50%", backgroundColor:"#fff"}}>


            </View>

            <View style={{elevation: 5, borderRadius : 30, position: 'absolute', top : '18%', width: 350, height : 500, backgroundColor: '#ffffff'}}>
                <View style={styles.footer}>
                    <View style={{padding:15}}>
                        <Text style={styles.text_footer}>Username</Text>

                        <View style={styles.action}>
                            <TextInput style={{width: '100%',fontSize: 20}}
                                       placeholder="username"
                                       onChangeText={text => this.setState({username:text})}
                                       value={this.state.username}
                            />
                        </View>
                        
                    </View>
                    <View style={{padding:15}}>
                        <Text style={styles.text_footer}>Email</Text>

                        <View style={styles.action}>
                            <TextInput style={{width: '100%',fontSize: 20}}
                                       placeholder="email"
                                       onChangeText={text => this.setState({email:text})}
                                       value={this.state.email}
                            />
                        </View>
                        
                    </View>
                    <View style={{padding:15}}>
                        <Text style={styles.text_footer}>Password</Text>
                        <View style={styles.action}>
                            <TextInput style={{width: '100%',fontSize: 20}}
                                       placeholder="password"
                                       onChangeText={text => this.setState({pass:text})}
                                       value={this.state.pass}
                                       secureTextEntry={true}

                            />
                        </View>

                    </View>
                    <View style={{padding:15}}>
                        <Text style={styles.text_footer}>Retypepassword</Text>
                        <View style={styles.action}>
                            <TextInput style={{width: '100%',fontSize: 20}}
                                       placeholder="retypepassword"
                                       onChangeText={text => this.setState({rpass: text})}
                                       value={this.state.rpass}
                                       secureTextEntry={true}

                            />
                        </View>

                    </View>

                </View>

            </View>

            <View style={{elevation:7, position:'absolute', width: 200, height : 70, borderRadius:50, top:600,  backgroundColor: '#2652bf', alignItems:"center", justifyContent:"center"}}>
                <TouchableOpacity onPress={ () => {this.state.pass !== this.state.rpass ? alert("nu") : this.onRegisterPress()}}>
                    <Text style={styles.text}>Register</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    )
}}

const styles = StyleSheet.create({
    dot:{
        width:"35%",
        height:"35%",
        borderRadius:70,
        backgroundColor:"#fff",
        justifyContent:"center",
        alignItems:"center",
        bottom:"20%"
    },
    container:{

        justifyContent: "center",
        alignItems: "center",
    },
    footer:{

        flex:3,
        bottom: "7%",
        backgroundColor:"#fff",
        borderTopLeftRadius: 35,
        borderTopRightRadius: 50,
        paddingHorizontal: 20,
        paddingVertical:30,


    },
    action:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 1,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        paddingBottom: 10,


    },
    text_footer:{
        color:"#0352fc",
        fontSize: 18,
        padding:1,
        textAlign:"left"
    },
    text:{
        color:"#fff",
        fontWeight: 'bold',
        fontSize: 30,

    },

})

