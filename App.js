import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View ,Button} from 'react-native';
import{useState,useEffect} from 'react'

export default function App() {
    const [img,setImg]= useState('https://purr.objects-us-east-1.dream.io/i/4FXOM.jpg') 

    const getImg=()=>{
      fetch('https://aws.random.cat/meow')
      .then((res)=>{
        return res.json()
      }).then((data)=>{
        setImg(data.file);
        console.log(img);
      })
    }
    useEffect(()=>{getImg()},[])
  return (
    <View style={styles.container}>
      <Image source={{uri:img}}
             style={styles.img}
       /> 
      <Button
       onPress={getImg}
       title="Nouveau Chat"
       color="#841584"
       accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    width: '50vw',
    height: '80vh',
    marginBottom:'5%'
  }
});
