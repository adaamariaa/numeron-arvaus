import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, TextInput, Text, Alert } from 'react-native';

export default function App() {
  const [number, setNumber] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [random, setRandom] = React.useState(Math.floor(Math.random() * 100) + 1);
  const [text, setText] = React.useState("Guess a number between 1-100");



  const check = () => {
    if(number == random){
      setRandom(Math.floor(Math.random() * 100) + 1)
      const summary = count;
      setCount(0);
      return(Alert.alert('Cool, you guessed it in '+summary+' tries!')
    )}
    else if((number<=0)||(number>=101)){
      setText("Out of the range!")
    }
    else if(number< random){
      setCount(count+1)
      return (setText('Your guess '+number+' is too low!')
      )
    }
    else if(number> random){
      setCount(count+1)
      return (setText('Your guess '+number+' is too high!')
      )
    }
    else {
      return (setText("That's wrong!"))
    }
  }


  return (
    <View style={styles.container}>
    <Text>
      {text}
    </Text>
    <TextInput
          style={{width: 200, borderColor: 'black', borderWidth: 1 }}
          keyboardType={'numeric'}
          onChangeText={number => setNumber(number)}
        />
      <Button color='pink' onPress={check} title="Make Guess" />
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
});
