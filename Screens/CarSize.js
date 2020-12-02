import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Button} from 'react-native';
import {WebCallClass} from "../Components/WebCallClass";
import { Actions } from 'react-native-router-flux';
import Slider from '@react-native-community/slider';

var WebCall = new WebCallClass();

var pricecar

class CarSize extends Component {
    constructor(props){
        super(props);
        this.state= {
            element: [ ],
            data:[],
            pricecar:[],
            
            
        }
        
    }
    componentDidMount(){

        if (this.props.filterid == 1){


            this.Categories();
        } else 
        
        if (this.props.filterid == 2){


            this.Categories();

           alert('price')
        }  else 
        
        if (this.props.filterid == 3){


           // this.Categories();

           alert('transmision')
        } 
        
       
    
    }
    
    Categories = async () => {
     var   result = await WebCall.Categories()
          alert(result)
    
        this.setState({data:result})
    
    }



drawForm() {

      if   (this.props.filterid == 1){
        var idcateg
    
        let imgLink = 'http://192.168.2.229/CarRent/images/' 
            ViewDraw = 
            <FlatList
            numColumns={2}
            keyExtractor={(item) => item.class_id}
            data={this.state.data}
            renderItem={({item}) =>(
            
                <TouchableOpacity style={styles.item}  onPress={() => Actions.Main({idcateg: item.class_id, pricecar: this.state.pricecar})}> 
               <Text >
                    {item.name}
                    
                    <Image style={{ width: 100, height: 100, flex: 1,  resizeMode: 'contain',}} source={ {uri: imgLink + item.cars_img2}}/>

                    
        </Text>
               </TouchableOpacity>
                
               


               
              

            )}/>

      } else  if   (this.props.filterid == 2){ 
        

        ViewDraw = 
        <View style={styles.priceContainer}>
            <Slider
            style={{width: 200, height: 40}}
            value={30}
            minimumValue={30}
            maximumValue={100}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            onValueChange = { val => this.setState({pricecar: Math.round(val)})}
  />
            <Text>{Math.round(this.state.pricecar)} </Text>
            <Button
                    onPress={() => Actions.Main({idcateg:this.state.data.class_id, pricecar: this.state.pricecar})}
                    title="Select Price"
                    color="#841584"
                  
            />
        </View>
    
    } else  if   (this.props.filterid == 3){

        ViewDraw =
        <View   style={styles.transmissionContainer} >
            <Button 
            
            title="Manual"
            color="#841584"
            
            
            ></Button>
            <Button 
            
            title="Manual"
            color="#841584"
            
            
            ></Button>

        </View>
    }

      return ViewDraw;

    }


    

    render(){
     
        console.log(this.state.data)
    return(
        <View style={styles.container}>
          {this.drawForm()}
                
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



    },
    priceContainer:{
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: "center",
        justifyContent: "center" 
    },

    transmissionContainer:{
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "space-around" 
    }

})



export default CarSize;
