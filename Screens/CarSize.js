import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Button} from 'react-native';
import {WebCallClass} from "../Components/WebCallClass";
import { Actions } from 'react-native-router-flux';
import Slider from '@react-native-community/slider';

var WebCall = new WebCallClass();

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
    
        let imgLink = 'http://192.168.2.224/CarRent/images/' 
            ViewDraw = 
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

      } else  if   (this.props.filterid == 2){ 
        
        ViewDraw = 
        <View style={styles.priceContainer}>
            <Slider
            style={{width: 200, height: 40}}
            minimumValue={30}
            maximumValue={100}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            onValueChange = { val => this.setState({pricecar: val})}
  />
  <Text>{Math.round(this.state.pricecar)} </Text>
  <Button
  onPress={() => Actions.Main({idcateg:this.state.data.class_id})}
  title="Select Price"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
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
    }

})



export default CarSize;
