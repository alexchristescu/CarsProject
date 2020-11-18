import React, {Component} from "react"
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
import {WebCallClass} from "../Components/WebCallClass";
import { Actions } from 'react-native-router-flux';
import Slider from '@react-native-community/slider';


var WebCall = new WebCallClass();

export default class PriceScreen extends Component {
        constructor(props){
            super(props)
            this.state ={
                data: []
            }
            this.Price = this.Price.bind(this)
        }

        componentDidMount(){
            
            this.Price();

        }

        
        Price = async () => {
            var   result = await WebCall.Categories()
                 alert(result)
           
               this.setState({data:result})
           
           }

     render(){
         return (
            <Slider
            style={{width: 200, height: 40}}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
         )
     }      

}