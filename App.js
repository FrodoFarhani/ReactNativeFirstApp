/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class app extends React.Component {
  state = {
    placeName: '',
    places: [],
  };
  placeNameChangeHandler = val => {
    this.setState({
      placeName: val,
    });
  };
  pressButtonHandler = () => {
    if (this.state.placeName.trim() === '') {
      alert('Please fill the textbox!');
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName),
      };
    });
  };
  render() {
    const placeOutput = this.state.places.map((place, i) => (
      <Text key={i}>{place}</Text>
    ));
    return (
      <>
        <View style={styles.contaiter}>
          <View style={styles.inputContainer}>
            <TextInput
              value={this.state.placeName}
              onChangeText={this.placeNameChangeHandler}
              style={styles.placeInput}
              placeholder="Awsome text!"
            />
            <Button
              title="Add"
              style={styles.btnInput}
              onPress={this.pressButtonHandler}
            />
          </View>
          <View>{placeOutput}</View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  contaiter: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 25,
  },
  inputContainer: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  placeInput: {
    width: '70%',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  btnInput: {
    width: '30%',
  },
});
