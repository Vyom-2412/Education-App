import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Header } from 'react-native-elements';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownHeight: 40,
      grade: '',
      subject: '',
    };
  }

  render() {
    return (
      <SafeAreaProvider style={styles.container}>
        <Header
          backgroundColor={'lime'}
          centerComponent={{
            text: 'Education App',
            style: {
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              backgroundColor: 'lime',
              fontSize: 29,
              fontWeight: 'bold',
              fontFamily: 'Eras Bold ITC',
            },
          }}
        />
        <Text style={styles.homeScreenText}> Choose your grade</Text>
        <View style={{ height: 40, marginTop: 40 }}>
          <DropDownPicker
            items={[
              { label: 'Grade 8', value: 'grade8', selected: true },
              { label: 'Grade 9', value: 'grade9' },
              { label: 'Grade 10', value: 'grade10' },
              { label: 'Grade 11', value: 'grade11' },
              { label: 'Grade 12', value: 'grade12' },
            ]}
            defaultValue={'Select grade'}
            containerStyle={{
              height: 40,
              borderRadius: 20,
              marginBottom: 10,
            }}
            onOpen={() => {
              this.setState({ dropdownHeight: 170 });
            }}
            onClose={() => {
              this.setState({ dropdownHeight: 40 });
            }}
            style={{ backgroundColor: 'lightblue' }}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{ backgroundColor: 'white' }}
            labelStyle={{
              color: 'black',
            }}
            arrowStyle={{
              color: 'black',
              marginRight: 30,
            }}
            onChangeItem={(item) =>
              this.setState({
                grade: item.value,
              })
            }
          />
          <TouchableOpacity
            onPress={() => {
              if (this.state.grade === "grade8") {
                console.log(this.state.grade)
                this.props.navigation.navigate("Grade8", {
                  grade: this.state.grade,
                });
              }
              if (this.state.grade === "grade9") {
                console.log(this.state.grade)
                this.props.navigation.navigate("Grade9", {
                  grade: this.state.grade,
                });
              }
              if (this.state.grade === "grade10") {
                console.log(this.state.grade)
                this.props.navigation.navigate("Grade10", {
                  grade: this.state.grade,
                });
              }
              if (this.state.grade === "grade11") {
                console.log(this.state.grade)
                this.props.navigation.navigate("Grade11", {
                  grade: this.state.grade,
                });
              }
              if (this.state.grade === "grade12") {
                console.log(this.state.grade)
                this.props.navigation.navigate("Grade12", {
                  grade: this.state.grade,
                });
              }
            }}>
            <Text style={styles.clickHereText}> Click Here </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  homeScreenText: {
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
  },
  clickHereText: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'cyan',
    color: 'red',
    borderRadius: 15,
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Eras Bold ITC',
    marginTop: 10,
    marginLeft: 50,
    marginRight: 50,
  }
});
