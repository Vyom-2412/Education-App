import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default class Grade12 extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
       <Header
          backgroundColor={'#1fdb80'}
          centerComponent={{
            text: 'Grade 12 Links',
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
      <Text style={styles.textStyle} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/lemh1dd.zip')}>Grade 12 Maths 
      Part 1</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/lemh2dd.zip')}>Grade 12 Maths
      Part 2</Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/leph1dd.zip')}> Grade 12 Physics 
      Part 1 </Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/leph2dd.zip')}>Grade 12 Physics 
      Part 2</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/lebo1dd.zip')}>Grade 12 Biology
      </Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/lehe1dd.zip')}>Grade 12 Human 
      Ecology and Family Sciences Part 1</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/lehe2dd.zip')}>Grade 12 Human 
      Ecology and Family Sciences Part 2</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/lech1dd.zip')}>Grade 12 
      Chemistry Part 2</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/lech2dd.zip')}>Grade 12 
      Chemistry Part 2</Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/leac1dd.zip')}>Grade 12 
      Accountancy Part 1</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/leac2dd.zip')}>Grade 12 
      Accountancy Part 2 </Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/lhat1dd.zip')}>Grade 12 Hindi 
      Antra</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/lhar1dd.zip')}>Grade 12 Hindi 
      Aaroh</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/lhvt1dd.zip')}>Grade 12 Hindi 
      Vitaan</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/lhan1dd.zip')}>Grade 12 Hindi 
      Antraal</Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/lekl1dd.zip')}>Grade 12 English 
      Kaleidoscope</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/lefl1dd.zip')}>Grade 12 English 
      Flamingo</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/levt1dd.zip')}>Grade 12 English 
      Vistaas</Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/lehs1dd.zip')}>Grade 12 Hisory 
      1</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/lehs2dd.zip')}>Grade 12 Hisory 
      2</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/lehs3dd.zip')}>Grade 12 Hisory 
      3</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/legy1dd.zip')}>Grade 12 
      Fundamentals of Human Geography</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/legy3dd.zip')}>Grade 12 
      Practical Work In Geography Part 2</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/legy2dd.zip')}>Grade 12 India 
      People and Economy</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/leps1dd.zip')}>Grade 12 
      Contemporary World Politics</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/leps2dd.zip')}>Grade 12 
      Politics In India Since Independence</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/leec2dd.zip')}>Grade 12 
      Introductory Microeconomics</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/leec1dd.zip')}>Grade 12 
      Introductory Macroeconomics</Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/lepy1dd.zip')}>Grade 12 
      Psychology</Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/lesy1dd.zip')}>Grade 12 
      Indian Society</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/lesy2dd.zip')}>Grade 12 
      Social Change And Development In India</Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/lebs1dd.zip')}>Grade 12 
      Business Studies Part 1</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/lebs2dd.zip')}>Grade 12 
      Business Studies Part 2</Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/legd1dd.zip')}>Grade 12 
      New Age Graphic Design</Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/khsr2dd.zip')}>Grade 12 
      Srijan 2</Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/lefa1dd.zip')}>Grade 12 
      An Introduction To Indian Art</Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/lecs1dd.zip')}>Grade 12 
      Computer Science</Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/leip1dd.zip')}>Grade 12 
      Informatics Practices</Text>
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
