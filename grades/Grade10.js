import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default class Grade10 extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
       <Header
          backgroundColor={'#1fdb80'}
          centerComponent={{
            text: 'Grade 10 Links',
            style: {
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              backgroundColor: 'transparent',
              fontSize: 20,
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
      <Text style={styles.textStyle} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/jeff1dd.zip')}>Grade 10 English 
      First Flight</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/jefp1dd.zip')} >Grade 10 English
      Footprints Without Feet</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/jewe2dd.zip')}> Grade 10 English 
      Words and Expression 2 </Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/jhks1dd.zip') } >Grade 10 Hindi 
      Kshitij 2</Text>
      <Text style={styles.textStyle3} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/jhsp1dd.zip') } >Grade 10 Hindi 
      Sparsh</Text>
      <Text style={styles.textStyle3} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/jhkr1dd.zip') } >Grade 10 Hindi 
      Kritika</Text>
      <Text style={styles.textStyle3} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/jhsy1dd.zip') } >Grade 10 Hindi 
      Sanchayan 2</Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/jemh1dd.zip') } >Grade 10 Maths 
      </Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/jesc1dd.zip') } >Grade 10 Science
      </Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/jess3dd.zip') } >Grade 10 
      History </Text>
      <Text style={styles.textStyle3} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/jess4dd.zip') } >Grade 10 Civics 
      </Text>
      <Text style={styles.textStyle3} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/jess1dd.zip') } >Grade 10 
      Geography </Text>
      <Text style={styles.textStyle3} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/jess2dd.zip') } >Grade 10 
      Economics </Text>
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
