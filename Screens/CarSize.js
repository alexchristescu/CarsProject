import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {WebCallClass} from "../Components/WebCallClass";

var WebCall = new WebCallClass();

class CarSize extends Component {
    constructor(props){
        super(props);
        this.state= {
            element: [ {category:"compact", id:1,
                image: require("../images/mercedesmlSUV2.png"),
                },
                {category:"SUV",
                    id:2,
                    image: require("../images/mercedesmlSUV2.png"),},
                   
                {category:"sedan", id:3,image: require("../images/mercedesmlSUV2.png"),},
                    
                {category:"sport", id:4,image: require("../images/mercedesmlSUV2.png"),}
                  
            ],
            data:[],
        }
    }
    componentDidMount(){


        this.Categories();
    
    }
    
    Categories = async () => {
     var   result = await WebCall.Categories()
          alert(result)
    
        this.setState({data:result})
    
    }
    

    render(){
    return(
        <View style={styles.container}>
            <FlatList
                numColumns={2}
                keyExtractor={(item) => item.class_id}
                data={this.state.data}
                renderItem={({item}) =>(
                   <Text style={styles.item}>
                                                        {item.name}
                                                            </Text>
                    
                                

                )}/>
        </View>
    )}
}

const styles = StyleSheet.create({
    container:{

        flex:1,
        backgroundColor:"#f2f2f2",
        height:"100%",



    },

    item:{
        textAlign:"center",
        borderColor: "#949292",
        padding:30,
        height:220,
        justifyContent: 'space-between',

        flexDirection:"column",
        backgroundColor:"#fff",
        borderWidth: 1,
        fontSize: 21,
        marginHorizontal:20,
        marginTop: 28,
        elevation: 5,
        flex:0.5



    }

})



export default CarSize;
