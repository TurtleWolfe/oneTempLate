import React from 'react'
import { StyleSheet, View } from 'react-native'

// import * as Font from 'expo-font';
import { Text } from 'react-native-elements';

export default function CharterText() {
  return (
    <View>
      <Text h2
      // style={styles.cbi}
      >
        charter-bold-italic
      </Text>
      <Text h3
      // style={styles.cb}
      >
        charter-bold
      </Text>
      <Text h4
      // style={styles.ci}
      >
        charter-italic
      </Text>
      <Text
      // style={styles.c}
      >
        charter
      </Text>
      <Text>
        charter
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  // cbi: {
  //   fontFamily: 'charter-bold-italic'
  // },
  // cb: {
  //   fontFamily: 'charter-bold'
  // },
  // ci: {
  //   fontFamily: 'charter-italic'
  // },
  // c: {
  //   fontFamily: 'charter'
  // },
})

// 'charter': require('./app/assets/fonts/Charter Regular.otf'),
// 'charter-bold': require('./app/assets/fonts/Charter Bold.otf'),
// 'charter-bold-italic': require('./app/assets/fonts/Charter Bold Italic.otf'),
// 'charter-italic': require('./app/assets/fonts/Charter Italic.otf'),