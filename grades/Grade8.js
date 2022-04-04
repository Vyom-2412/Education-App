import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './HomeScreen';

export default class Grade8 extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
       <Header
          backgroundColor={'#1fdb80'}
          centerComponent={{
            text: 'Grade 8 Links',
            style: {
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              backgroundColor: 'transparent',
              fontSize: 25,
              fontWeight: 'bold',
              fontFamily: 'sans-serif',
            },
          }}
        />
        <TouchableOpacity 
          onPress={()=>this.props.navigation.navigate("HomeScreen")}>
         <Text style={styles.goBackText}>Back</Text>
        </TouchableOpacity>
      <View style={styles.container}>
      <Text style={styles.textStyle} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/hehd1dd.zip')}>Grade 8 English 
      Textbook Honeydew.</Text>
      <Text style={styles.textStyle1} onPress={ ()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/heih1dd.zip') } >Grade 8 English
      Textbook It So Happened.</Text>
      <Text style={styles.textStyle2} onPress={ ()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/hhvs1dd.zip') } >Grade 8 Hindi 
      Vasant.</Text>
      <Text style={styles.textStyle3} onPress={ ()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/hhdv1dd.zip') } >Grade 8 Hindi 
      Durva.</Text>
      <Text style={styles.textStyle3} onPress={ ()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/hhbk1dd.zip') } >Grade 8 Hindi 
      Bharat Ki Khoj.</Text>
      <Text style={styles.textStyle3} onPress={ ()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/hhsb1dd.zip') } >Grade 8 Hindi 
      Sanshipt Budhcharit.</Text>
      <Text style={styles.textStyle2} onPress={ ()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/hemh1dd.zip') } >Grade 8 Maths 
      </Text>
      <Text style={styles.textStyle2} onPress={ ()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/hesc1dd.zip') } >Grade 8 Science
      </Text>
      <Text style={styles.textStyle2} onPress={ ()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/hess1dd.zip') } >Grade 8 
      History Part 1 </Text>
      <Text style={styles.textStyle3} onPress={ ()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/hess2dd.zip') } >Grade 8 
      History Part 2 </Text>
      <Text style={styles.textStyle3} onPress={ ()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/hess3dd.zip') } >Grade 8 Civics 
      </Text>
      <Text style={styles.textStyle3} onPress={ ()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/hess4dd.zip') } >Grade 8 
      Geography </Text>
      </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
   },
  textStyle: {
    marginLeft:10,
    marginTop: 50,
    color:'red',
    fontSize:13,
    textDecorationLine: 'Underline'
  },
  textStyle1: {
    marginLeft:10,
    marginTop: 10,
    color:'red',
    fontSize:13,
    textDecorationLine: 'Underline'
  },
  textStyle2: {
    marginLeft:10,
    marginTop: 40,
    color:'red',
    fontSize:13,
    textDecorationLine: 'Underline'
  },
  textStyle3: {
    marginLeft:10,
    marginTop: 10,
    color:'red',
    fontSize:13,
    textDecorationLine: 'Underline'
  },
  goBackText: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#eb450e',
    color: 'white',
    borderRadius: 15,
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Eras Bold ITC',
    marginTop: 50,
    marginLeft: 30,
    marginRight: 30,
  }
});
