import React, {Component} from 'react';
import { StyleSheet,ScrollView, View, LayoutAnimation, TouchableOpacity, Text, AsyncStorage} from 'react-native';
import { ActionConst, Actions } from 'react-native-router-flux';
import Accordian from '../Components/Accordian';


import {WebCallClass} from "../Components/WebCallClass";

var WebCall = new WebCallClass();

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      AccordionData:[],
      hasToken:false,
      
     }
  }
  componentDidMount(){

    console.log(['paramertru categorie'],this.props.idcateg)

    if (  typeof (this.props.idcateg) == 'undefined') {

      this.Cars(0);
    } else {

      this.Cars(this.props.idcateg);
    }
   



}

    Cars = async (idcateg) => {
         var   result = await WebCall.Cars(idcateg)
      alert(result)

    this.setState({AccordionData:result})



}


update_Layout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); 
    const array = this.state.AccordionData.map((item) => {
      const newItem = Object.assign({}, item);
      newItem.expanded = false; 
      return newItem;
    });

    array[index].expanded = true;

    this.setState(() => {
      return {
        AccordionData: array
      }
    });
  }
  LogOff = () => { AsyncStorage.removeItem('token').then(()=> Actions.LogIN()) }
  ClearFilter = () => {this.Cars(0);}

  render() {
    
    return (
      <View style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity style={styles.headerbtn} onPress = {() => this.LogOff()}  >
                        <Text style={{color:"#fff", fontSize: 18,}}> LogOff </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerbtn}  onPress={() => this.ClearFilter()}>
                        <Text style={{color:"#fff", fontSize: 18,}}> Clear filter </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerbtn}  onPress={() => Actions.FilterScreen()}>
                        <Text style={{color:"#fff", fontSize: 18,}}> Filter </Text>
                    </TouchableOpacity>
                    </View>
        <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 5 }}>
            {
              this.state.AccordionData.map((item, key) =>
                (
                  <Accordian key={key}     onClickFunction={this.update_Layout.bind(this, key)} item={item} />
                ))
            }
          </ScrollView> 
      </View>
    );
  }

}

//   renderAccordians=()=> {
//     const items = [];
//     for (item of this.Cars()) {
//         items.push(
//             <Accordian 
//                 title = {item.name}
//                 data = {item.make}
//             />
//         );
//     }
//     return items;
// }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
            justifyContent: 'center',
            paddingTop: (Platform.OS === 'ios') ? 20 : 0,
            backgroundColor: '#d0d4d9',
            alignItems:"center"

   
   
  },
  header: {
    width: 450,
    height: 60,
    backgroundColor: "#2d6ccf",
    flexDirection:"row",
    justifyContent: "space-around",
    padding: 4
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