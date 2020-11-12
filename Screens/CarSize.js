import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
import {WebCallClass} from "../Components/WebCallClass";
import { Actions } from 'react-native-router-flux';

var WebCall = new WebCallClass();

class CarSize extends Component {
    constructor(props){
        super(props);
        this.state= {
            element: [ ],
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
        var idcateg
        let imgLink = 'http://192.168.2.224/CarRent/images/' 
        console.log(this.state.data)
    return(
        <View style={styles.container}>
            <FlatList
                numColumns={2}
                keyExtractor={(item) => item.class_id}
                data={this.state.data}
                renderItem={({item}) =>(
                    <TouchableOpacity style={styles.item}  onPress={() => Actions.Main({idcateg: item.class_id})}> 
                   <Text >
                        {item.name}
                        
                        <Image style={{ width: 100, height: 100, flex: 1,  resizeMode: 'contain',}} source={ {uri: imgLink + item.cars_img2}}/>

                        
            </Text>
                   </TouchableOpacity>
                   
                  

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
