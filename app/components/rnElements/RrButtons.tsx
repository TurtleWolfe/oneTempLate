import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Button } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Feather, Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
export default function RrButtons(props) {
  return (
    <Button
      // style={styles.button}
      {...props}
      containerStyle={{ borderRadius: 50 }}
      buttonStyle={{ backgroundColor: "pink" }}
      type="outline"
      raised
    />
  )
}

const styles = StyleSheet.create({
  // button: {
  //   backgroundColor: "pink",
  //   padding: 10,
  //   borderRadius: 25,
  //   marginBottom: 10
  // },
  // buttonText: {
  //   fontSize: 17,
  //   color: '#fff',
  // },
})
