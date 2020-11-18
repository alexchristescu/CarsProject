import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, Image, UIManager,} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

export default class Accordian extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          data: props,
          expanded : false,
          updated_Height: 0,
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    componentWillReceiveProps(update_Props) {
        if (update_Props.item.expanded) {
          this.setState(() => {
            return {
              updated_Height: null
            }
          });
        }
        else {
          this.setState(() => {
            return {
              updated_Height: 0
            }
          });
        }
      }


      shouldComponentUpdate(update_Props, nextState) {
        if (update_Props.item.expanded !== this.props.item.expanded) {
              return true;
        }
        return false;
      }


    
  
  render() {

          let imglink = 'http://192.168.2.224/CarRent/images/' 
    return (
        <View style={styles.Panel_Holder}>
            
            <TouchableOpacity activeOpacity={0.7} onPress={this.props.onClickFunction} style={styles.Btn}>
            <Text style={styles.Panel_Button_Text}>{this.props.item.make} {this.props.item.model}</Text>
                    <Text style={styles.Panel_Button_Text}>{this.props.item.price}$/day</Text>
            </TouchableOpacity>

            <View style={{ height: this.state.updated_Height, overflow: 'hidden' }}>
            
            
            <View style={{width:400,flexDirection:"row",  alignItems:"center", justifyContent:"space-evenly"}}>
            <View style={{width:110,}}>
            <Text style={{bottom:50, fontSize:25, fontWeight:"bold"}}>
                                     {this.props.item.name}
                                 </Text>
                                 <Text>
                               <Image source={require('../images/person-silhouette.png')} />
                                 {this.props.item.nr_seats}
                                 </Text>
                                 <Text>
                               <Image source={require('../images/shopping-bag.png')} />
                                 {this.props.item.bag_capacity}
                                 </Text>
                                 <Text>
                               <Image source={require('../images/gas-station.png')} />
                                 {this.props.item.gas_desc}
                                 
                                 </Text>
                                 </View>
                                 <View style={{width:220,height:300,alignItems:"center",justifyContent:"center",}}>
                                 <Image style={{  flex: 1, width: '100%', height:  '1000%',resizeMode: 'contain',}} source={ {uri: imglink + this.props.item.cars_img}}/>
                              </View>
            
            </View>
                 
          </View>
        
              
            </View>
           
    )
  }


}

const styles = StyleSheet.create({
    trow_mainPanel: {
        
        borderWidth: 1,
        borderColor: '#a19e9c',
        marginVertical: 5,
        borderRadius: 10,
        backgroundColor: '#ffffff',  
        elevation: 1,
    },


    
    row_mainPanel: {
        
        borderWidth: 1,
        borderColor: '#a19e9c',
        marginVertical: 5,
        borderRadius: 10,
        backgroundColor: '#ffffff',  
        elevation: 1,
    },


    row_buttonPanel: {
        flexDirection: 'row',  // main axis
        padding: 10,
        justifyContent:"space-between",
        height: 80,
    },



    row_actionPanel: {
        padding: 10,
        height: 150,
        flexDirection: 'row',
        
    },


    row_right: {
        padding: 10,
        flex: 1,
        justifyContent: 'space-between',
        height:'100%',
    
    },

    row_client: {
      color: '#464646',
      
    },

    row_left: {
        justifyContent: 'center',
        height:'100%',
        width : 100,
        justifyContent: 'center',
        alignItems: 'center', 
    },

    row_iconView: {
       justifyContent: 'center',
       alignItems: 'center',
       
    },
    value: {
        color: '#464646',
        width: '30%',
        flex: 0,
        fontSize:  1
    },

    MainContainer: {
        flex: 1 ,
        justifyContent: 'center',

        paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },

    Panel_text: {

        fontSize: 18,
        color: '#000',
        padding: 10,

    },

    Panel_Button_Text: {

        color: '#000',
        fontSize: 21,

    },

    Panel_Holder: {
        borderWidth: 1,
        borderRadius:10,
        elevation:1,
        backgroundColor:"#d0d4d9",
        borderColor: '#2d6ccf',
        marginVertical: 5,
        width:400,



    },

    Btn: {
        padding: 10,
        borderRadius: 5,
        elevation: 4,
        backgroundColor:"white",
        flexDirection:"row",
        justifyContent: "space-between"
    },

    HeadStyle: {
        height: 50,
        alignContent: "center",
        backgroundColor: '#ffe0f0'
    },
    TableText: {
        margin: 10
    }

}); 