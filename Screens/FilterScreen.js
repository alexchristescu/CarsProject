import React, {Component} from "react"
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Button} from 'react-native';
import { ActionConst, Actions } from "react-native-router-flux";
import {WebCallClass} from "../Components/WebCallClass";


var WebCall = new WebCallClass();

class Filter extends Component{

    constructor(props){
        super(props)
        this.state= {
         data:[]

        }
    }

    componentDidMount(){


        this.Filter();
    
    }
    
    Filter = async () => {
     var   result = await WebCall.Filter()
      //   alert(result)
    
        this.setState({data:result})
    
    }

    // FilterAction = async () => {
    //     if(JSON.stringify(this.state.data.filter_id === '1')){
    //         Actions.CarSize({filter: 1})
    //     } else if(JSON.stringify(this.state.data.filter_id === '2')){
    //         Actions.Main()
    //     }else if(JSON.stringify(this.state.data.filter_id === '3')){
    //         Actions.Main()
    //     }
    // }

    OnFilterAction = (filterid) => {
        Actions.CarSize({filterid: filterid})
    }


 render(){
     console.log(this.state.data.filter_id)

    return(

    <View style={styles.container}>
        <FlatList
            keyExtractor={(item) =>item.filter_id}
            data={this.state.data}  
            renderItem={({item}) =>(
                <View>
                <TouchableOpacity onPress={() => this.OnFilterAction(item.filter_id)}>
                                            <Text style={styles.item}>{item.filter_category}</Text>
                                         </TouchableOpacity>
                        
                      </View> 
            )}/>


    </View>
        )}
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#f2f2f2",
      paddingTop:40,
      paddingHorizontal:20
    },

    item:{
        borderColor: "#949292",
        padding:30,
        backgroundColor:"#fff",
        borderWidth: 1,
        fontSize: 24,


    }

})

export default Filter;
