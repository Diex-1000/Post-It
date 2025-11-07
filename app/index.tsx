import TralaleroImage from '@/assets/images/Tralalero-Tralala-PNG-HD-Isolated.webp';
import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter()
  return (
    <View style = {styles.container}
    >
      <Text style = {styles.title}>Tralalero Tralala</Text>
      <Text style = {styles.subtitle}>Porco dio y porco allah</Text>
      <Image source={TralaleroImage} style = {styles.image}></Image>
      <TouchableOpacity 
      style= {styles.button}
      onPress={()=>router.push('./notes')}
      >
      <Text style={{color:"white"}}>GIVE IT A SHOT</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6B8BB0"
  },
  image: {
    width: 300,
    height: 400,
    marginBottom: 25

  },
  title: {
    fontSize:50,
    fontWeight:"bold"
  },
  subtitle: {
    fontSize:30,
    marginBottom: 12
  },
  button: {
    backgroundColor:"blue",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius:8,
    alignItems:"center"
  }
})
  
