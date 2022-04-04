import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default class Grade11 extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
       <Header
          backgroundColor={'#1fdb80'}
          centerComponent={{
            text: 'Grade 11 Links',
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
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/keww1dd.zip')}>Grade 11 English 
      Woven Words</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/kehb1dd.zip')}>Grade 11 English
      Hornbill</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/kesp1dd.zip')}>Grade 11 English
      Snapshots</Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/kemh1dd.zip')}>Grade 11 Maths
      </Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/keac1dd.zip')}>Grade 11 
      Accountancy 1</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/keac2dd.zip')}>Grade 11 
      Accountancy 2</Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/kech1dd.zip')}>Grade 11 
      Chemistry 1 </Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/kech2dd.zip')}>Grade 11 
      Chemistry 1 </Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/kebo1dd.zip')}>Grade 11 Biology
      </Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/keph1dd.zip')}>Grade 11 Physics 1
      </Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/keph2dd.zip')}>Grade 11 Physics 2
      </Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/kehs1dd.zip')}>Grade 11 History
      </Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/kegy2dd.zip')}>Grade 11 
      Fundamentals of Physical Geography</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/kegy3dd.zip')}>Grade 11 
      Practical Work in Geography</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/kegy1dd.zip')}>Grade 11 
      India : Physical Environment</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/keps1dd.zip')}>Grade 11 
      Political Theory</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/keps2dd.zip')}>Grade 11 
      Indian Constitution At Work</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/keec1dd.zip')}>Grade 11 
      Indian Econommic Development</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/kest1dd.zip')}>Grade 11 
      Statistics for Economics</Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/kesy1dd.zip')}>Grade 11 
      Introducing Sociology</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/kesy2dd.zip')}>Grade 11 
      Understanding Society</Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/kepy1dd.zip')}>Grade 11 
      Psychology</Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/kebs1dd.zip')}>Grade 11 
      Business Studies</Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/kegd1dd.zip')}>Grade 11 
      The Story of Graphic Design</Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/kect1dd.zip')}>Grade 11 
      CCT Part 1</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/kect2dd.zip')}>Grade 11 
      CCT Part 2</Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/kehe1dd.zip')}>Grade 11 
      Home Science Part 1</Text>
      <Text style={styles.textStyle1} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/kehe2dd.zip')}>Grade 11 
      Home Science Part 2</Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/khsr1dd.zip')}>Grade 11 
      Srijan</Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/kefa1dd.zip')}>Grade 11 
      Fine Art</Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/keip1dd.zip')}>Grade 11 
      Informatics Practices</Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/kecs1dd.zip')}>Grade 11 
      Computer Science</Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/kebt1dd.zip')}>Grade 11 
      Biotechnology</Text>
      <Text style={styles.textStyle2} onPress={()=> Linking.openURL('https://ncert.nic.in/textbook/pdf/khtp1dd.zip')}>Grade 11 
      Sangeet</Text>
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
