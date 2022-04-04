import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default class Grade9 extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
       <Header
          backgroundColor={'#1fdb80'}
          centerComponent={{
            text: 'Grade 9 Links',
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
      <Text style={styles.textStyle} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/iebe1dd.zip')}>Grade 9 English 
      Beehive</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/iemo1dd.zip')} >Grade 9 English
      Moments</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/iewe1dd.zip')}> Grade 9 English 
      Words and Expression 1 </Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/ihks1dd.zip') } >Grade 9 Hindi 
      Kshitij</Text>
      <Text style={styles.textStyle3} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/ihsp1dd.zip') } >Grade 9 Hindi 
      Sparsh</Text>
      <Text style={styles.textStyle3} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/ihkr1dd.zip') } >Grade 9 Hindi 
      Kritika</Text>
      <Text style={styles.textStyle3} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/ihsa1dd.zip') } >Grade 9 Hindi 
      Sanchayan</Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/iemh1dd.zip') } >Grade 9 Maths 
      </Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/iesc1dd.zip') } >Grade 9 Science
      </Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/iess3dd.zip') } >Grade 9 
      History </Text>
      <Text style={styles.textStyle3} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/iess4dd.zip') } >Grade 9 Civics 
      </Text>
      <Text style={styles.textStyle3} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/iess1dd.zip') } >Grade 9 
      Geography </Text>
      <Text style={styles.textStyle3} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/iess2dd.zip') } >Grade 9 
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
