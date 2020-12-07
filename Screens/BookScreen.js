import React, {Component} from "react"
import { StyleSheet,ScrollView, View, LayoutAnimation, TouchableOpacity,FlatList,Image, Text, AsyncStorage} from 'react-native';
import { ActionConst, Actions } from 'react-native-router-flux';
import {WebCallClass} from "../Components/WebCallClass"
import { Rating, AirbnbRating } from 'react-native-ratings';
import DatePicker from 'react-native-datepicker'
import moment from "moment"
import CalendarPicker from 'react-native-calendar-picker';

var WebCall = new WebCallClass();


export default class BookScreen extends Component {
        constructor(props){
            super(props)
            this.state= {
                data:[],
                selectedStartDate: null,
                selectedEndDate: null,
            }
            this.CarScreen = this.CarScreen.bind(this);
            this.onDateChange = this.onDateChange.bind(this);
        }
        onDateChange(date, type) {
            if (type === 'END_DATE') {
              this.setState({
                selectedEndDate: date,
              });
            } else {
              this.setState({
                selectedStartDate: date,
                selectedEndDate: null,
              });
            }
          }
        

        CarScreen = async (idcar) => {
            var   result = await WebCall.CarScreen(idcar)



           
               this.setState({data:result})
               
               console.debug(['continut'],result)
               console.debug(['continut'],this.state.data[0].bag_capacity)
              
           
           }
           componentDidMount(){

            let testdate = this.getDate();
            this.CarScreen(this.props.idcar)
            console.debug(['data'],testdate)

            this.setState({data1: testdate})
            
            
        }
        getDate ()  {
            var date = new Date().getDate();
            var month = new Date().getMonth() + 1;
            var year = new Date().getFullYear();
            
        
           
        
            return  date + '-' + month + '-' + year;
        
        
        }        
    // drawScreen() {
    //     if(this.props.car_id = 15){
    //         ViewDraw =<View>
    //         <Text>{this.props.mileage}</Text>



    //         </View> 
    //     }

    //     return ViewDraw;

    // }
         
        // Mileage = () => {
        //      return this.state.data[0].mileage
        // }


        resetDate () {
            this.setState({date2: moment().add(1, 'days')},() => console.debug(['on modal'], this.state.date2))

        }

    render(){
      let mileage = this.state.data.map(element => element.mileage)
      let img = this.state.data.map(element => element.cars_img)
      let nrseats = this.state.data.map(element => element.nr_seats)
      let bag_capacity = this.state.data.map(element => element.bag_capacity)
      let transmission = this.state.data.map(element => element.transmission)
      let gas_desc = this.state.data.map(element => element.gas_desc)
      let price = this.state.data.map(element => element.price)
      let make = this.state.data.map(element => element.make)
      let model = this.state.data.map(element => element.model)
      let categorie = this.state.data.map(element => element.name)
      let rating = this.state.data.map(element => element.car_rating)
      
      let datet = moment(this.state.date1).add(1, 'days')
      let datecurrent = new Date()

      const { selectedStartDate, selectedEndDate } = this.state;
    const minDate = new Date(); // Today
    const maxDate = new Date(2021, 6, 3);
    const startDate  =  selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';

      let imglink = 'http://192.168.2.224/CarRent/images/' 
        return(
            
                
            
            <View style={styles.container}>
                <Text style = {{bottom:30,right:120,fontSize:17,position: 'relative'}}>{make} {model}</Text>
                <Text style = {{bottom:30,right:120,fontSize:15,color:"#8f949c"}}>{categorie}</Text>
               <Image style={styles.header} source={ {uri: imglink + img}}/>
              
               <View style = {{ bottom:30,width:350,flexDirection:"row",  alignItems:"center", justifyContent:"space-evenly", }}>
               <View style = {{flexDirection:"column",alignItems:"center", }}>
               <Image source={require('../images/person-silhouette.png')} />
                <Text> 
                    passangers: {nrseats} 
                    </Text>
                    </View>
                    <View style = {{flexDirection:"column",alignItems:"center"}}>
                    <Image source={require('../images/shopping-bag.png')} />
                    <Text>     capacity: {bag_capacity}</Text>
                        </View>
                    <View style = {{flexDirection:"column",alignItems:"center"}}>
                    <Image source={require('../images/shifter2.png')} />
                    <Text>   {transmission}</Text>
                        </View>
                    <View style = {{flexDirection:"column",alignItems:"center"}}>
                    <Image source={require('../images/gas-station.png')} />
                    <Text>   {gas_desc}</Text>
                        </View>
                </View>
                    <View style ={{flexDirection:"row",}}>
                    <View style={{bottom:30, right:80}}>
                     <AirbnbRating
                        count={rating}
                        reviews={["Terrible", "Bad", "Great", "Excelent", "Best",]}
                        isDisabled
                        defaultRating={rating}
                        
                        size={20}
                        />

                    </View>
                    <View style={{ left:80,}}>
                        <Text style={{fontSize:25}}> {price}$/day </Text>
                    </View>
                    </View>
                    <View style={{}} >
                    {/* <DatePicker
                        style={{width: 200}}
                        date={this.state.date1}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate={new Date()}
                       
                        maxDate="2025-12-31"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                        // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date1) => {this.setState({date1: date1})}}
                    />
                    
                    <DatePicker
                        style={{width: 200}}
                        date={this.state.date2}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate={this.state.date2}
                        onOpenModal ={() => this.resetDate()}
                        maxDate="2025-12-31"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                        // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date2) => {this.setState({date2: date2})}}
                    /> */}
                    <View >
                    <CalendarPicker
                        startFromMonday={true}
                        allowRangeSelection={true}
                        minDate={minDate}
                        maxDate={maxDate}
                        todayBackgroundColor="#f2e6ff"
                        selectedDayColor="#7300e6"
                        selectedDayTextColor="#FFFFFF"
                        onDateChange={this.onDateChange}
                        />
                        </View>
                    </View>
                     </View>
                   
               
        )
    }
    
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
              justifyContent: 'center',
              paddingTop: (Platform.OS === 'ios') ? 20 : 0,
              backgroundColor: '#ebeced',
              alignItems:"center"
  
     
     
    },
    header: {
      width: 400,
      height: 150,
      bottom:70,
      left:10,
      flexDirection:"row",
      justifyContent: "space-around",
      resizeMode:"contain",
      padding: 5
  },
    headerbtn:{
      width:130,
        height:30,
      //  right:10,
      borderRadius: 5,
      elevation: 3,
      justifyContent: "center",
      alignItems: "center",
      top:"2%",
      backgroundColor:"#4287f5",
        padding : 5,
  
  
  
  
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
      justifyContent: 'center',
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
  });