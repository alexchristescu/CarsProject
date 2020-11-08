import React, {useState} from "react"
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Button} from 'react-native';
import { ActionConst, Actions } from "react-native-router-flux";

const Filter = ({navigation}) =>{
 const [element,setElement] = useState([
     {category:"Car Size", id:1},
     {category:"Price Range", id:2},
     {category:"Transmission", id:3},
 ])
 return(
    <View style={styles.container}>
        <FlatList
            keyExtractor={(item) => item.id}
            data={element}
            renderItem={({item}) =>(
                item.id === 1 ? <TouchableOpacity onPress={() => Actions.CarSize()}>
                                            <Text style={styles.item}>{item.category}</Text>
                                         </TouchableOpacity>
                        : item.id === 2 ? <TouchableOpacity onPress={() => Actions.Register()}>
                                                             <Text style={styles.item}>{item.category}</Text>
                                                        </TouchableOpacity>
                        : item.id === 3 ? <TouchableOpacity onPress={() => Actions.Main()}>
                                                <Text style={styles.item}>{item.category}</Text>
                                                    </TouchableOpacity>
                        : null
            )}/>


    </View>
        )
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
