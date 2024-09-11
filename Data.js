import axios from "axios";
import React, { useEffect } from "react";
import { View,Text, FlatList, TouchableOpacity, Image,StyleSheet } from "react-native";
import { Reducer } from "./components/Reducer";
import { initial_state } from "./components/Service";
import { useReducer } from "react";

const Data=({route})=>{
    const [state,dispatch]=useReducer(Reducer,initial_state)
    const {item}=route.params
    useEffect(()=>{
        axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/`+`${item}`).then((res)=>{
            dispatch({type:"success",payload:res.data})
        }).catch(e=>{
            dispatch({type:"error"})
        })
        console.log("data",state.post)
    },[])
    return(
        <View style={{flex:1,justifyContent:"center"}}>
        <View style={{margin:30,borderWidth:1,alignItems:"center",height:400}}>
            <Image source={{uri:state.post.primaryImage}} style={{width:100,height:100,marginTop:20}}/>
            <Text style={styles.text}>ObjectId: {state.post.objectID}</Text>
            <Text style={styles.text}>Department: {state.post.department}</Text>
            <Text style={styles.text}>Title: {state.post.title}</Text>
            <Text style={styles.text}>Period: {state.post.period}</Text>
            <Text style={styles.text}>Culture: {state.post.culture}</Text>
        </View>
        </View>
    )
}
const styles=StyleSheet.create({
    text:{
        marginTop:20,
        textAlign:"center"
    }
})
export default Data;