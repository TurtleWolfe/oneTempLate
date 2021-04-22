import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import CharterText from '../components/rnElements/CharterText';
import RrButton from '../components/rnElements/RrButtons';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Feather, Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

// function handleClick() => {}

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <CharterText />
      <RrButton
        title="Loading button"
        // style={styles.button}
        // loading
        // onPress={handleClick}
        icon={
          <Icon
            name="camera"
            size={13}
            color="dodgerblue"
          />
        }
      />
      <RrButton />
      <RrButton />
      <RrButton
        icon={
          <Icon
            name="camera"
            size={13}
            color="dodgerblue"
          />
        }
      />
      <Text style={{ fontFamily: 'SpaceMono', fontSize: 30 }}>SpaceMono</Text>
      <Text style={{ fontFamily: 'Charter', fontSize: 30 }}>Charter</Text>
      <Text style={{ fontFamily: 'CharterBold', fontSize: 30 }}>CharterBold</Text>
      <Text style={{ fontFamily: 'CharterBoldItalic', fontSize: 30 }}>CharterBoldItalic</Text>
      <Text style={{ fontFamily: 'CharterItalic', fontSize: 30 }}>CharterItalic</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  // button: {
  //   // backgroundColor: "blue",
  //   padding: 10,
  //   borderRadius: 25,
  //   marginBottom: 10
  // },
  // buttonText: {
  //   fontSize: 17,
  //   color: '#fff',
  // },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
