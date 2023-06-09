import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
 FirstScreen: undefined;
  Details: undefined;
};

type FirstScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList, // Replace "RootStackParamList" with your actual stack param list type
  'FirstScreen'
>;

// Define the screen props type
type FirstScreenProps = {
  navigation: FirstScreenNavigationProp;
};
const FirstScreen: React.FC<FirstScreenProps> = ({ navigation }) => {
  return (
    <ScrollView>
      <View  style={styless.firstbox} >
      <View style={styless.gcolor}><Text>COFFEE TASTE !!</Text></View>
    
      <Image source={require("../images/coffee.jpg")} style={styless.image}/>
      </View>

      <View style={styless.textBox}>
        <Text>Find Your Favriote Coffee</Text>
        <Text>Coffee Taste</Text>

        <Text>We'ra cottop shop, beer and wine bar</Text>
        <Text>& event space for performing arts</Text>

      </View>
      <View style={styless.buttonBox}>
        
        <TouchableOpacity onPress={()=>{navigation.navigate('Details')}} style={styless.startButton}>
        <Text>Start</Text>
        </TouchableOpacity>

       

      </View>
      
    
    
    </ScrollView>
  )
}

export default FirstScreen

const styless = StyleSheet.create({
    firstbox:{
        display:'flex',
        justifyContent:"center",
        alignItems:"center",
        height: 400, 
       
    },
    gcolor:{
        display:'flex',
        justifyContent:"center",
        alignItems:"center",
        height: 30,
        marginTop:50,
     
    },
    image:{
        height: 400,
        width:200,
    },
   textBox:{
    display:'flex',
    justifyContent:"center",
    alignItems:"center",
      height: 100,
      
  },
  buttonBox :{
    display:'flex',
    justifyContent:"center",
    alignItems:"center",
    height:200,
   
  },
  startButton:{
    height:70,
    width:220,
    backgroundColor:'brown',
    borderRadius:60
  }

})