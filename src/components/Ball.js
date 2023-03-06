import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

const Ball = () => {
  return (
      <LinearGradient colors={['rgb(3, 22, 65)','rgb(14, 72, 222)','rgb(0, 234, 255)' ]} style={styles.linearGradient}>
  <Text style={{fontSize:16,fontWeight:"bold"}}>22</Text>
</LinearGradient>
  )
}

var styles = StyleSheet.create({
    linearGradient: {
      backgroundColor:"blue",width:50,height:50,borderRadius:100,display:"flex",justifyContent:"center",alignItems:"center"
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
  });
export default Ball