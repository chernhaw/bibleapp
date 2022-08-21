import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground, SafeAreaView } from 'react-native';
import axios from 'axios'
export default function App() {
  const handlerPressed=()=>{
    alert("Text clicked")

    const axios = require("axios");

   

const options = {
  method: 'GET',
  url: 'https://ajith-holy-bible.p.rapidapi.com/GetChapter',
  params: {Book: 'Psalms', chapter: '1'},
  headers: {
    'X-RapidAPI-Key': 'my api key',
    'X-RapidAPI-Host': 'ajith-holy-bible.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
  alert(response.data.Output)
}).catch(function (error) {
	console.error(error);
});

  
  }

   
  return (
    <SafeAreaView style={styles.container}>
      
      <ImageBackground source={require("./assets/sea-7349845_640.jpg")}
      resizeMode="cover" style={styles.image}>
      <Text numberOfLines={100} onPress={handlerPressed} style={styles.text}>15 All of us, then, who are matures should take such a view of things.t And if on some point you think differently, that too God will make clear to you.u 16 Only let us live up to what we have already attained. </Text>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent:"center",
    alignItems:"center"
    
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },

  text: {
    color: "black",
    fontSize: 12,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#00000000",
    opacity: 0.4
  }

});
