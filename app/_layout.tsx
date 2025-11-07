import { Stack } from "expo-router";

const RootLayout = () => {
  return <Stack
  screenOptions={{
    headerStyle:{
      backgroundColor: "#29394C"
    },
    headerTintColor: "white",
    headerTitleStyle: {
      fontSize:40,
      fontWeight: "bold"
    },
    contentStyle: {
      paddingTop: 10,
      backgroundColor:"black"
    }

  }}
  >;
  <Stack.Screen name="index" options={{title: "gracias kevin"}}/>
  <Stack.Screen name="notes" options={{headerTitle: "notes"}}/>
  </Stack>;
}
export default  RootLayout
  

