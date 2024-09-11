import axios from "axios";
import React from "react";
import { View,Text, FlatList, TouchableOpacity } from "react-native";
import Service from "./components/Service";


const Home=({navigation})=>{
   
    const [state,dispatch]=Service();
    const render=({item})=>{
        return (
            <TouchableOpacity onPress={()=>{
                navigation.navigate("data",{item})
            }}
            >
                <View style={{borderWidth:1,padding:20}}>
                <Text style={{textAlign:"center"}}>{item}</Text>
            </View>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <Text style={{paddingTop:20,fontSize:20,textAlign:"center"}}>Museum of Arts</Text>
            <FlatList
            style={{paddingTop:20}}
            data={state.post.objectIDs}
            keyExtractor={(item,index)=>index}
            renderItem={render}
            ItemSeparatorComponent={()=>(<View style={{marginBottom:20}}/>)}
            />
        </View>
    )
}
export default Home;