import React, { Component } from 'react';
import { Alert, View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, } from 'react-native';
import { addDeck } from '../actions'
import { connect } from 'react-redux'
import { white, black, blue } from '../utils/colors'
import Button from './Button'

class AddDeck extends Component {
  state = {
    deckTitle: ''
  }

  AddDeck = () => {
    const { deckTitle } = this.state
    if (!deckTitle) {
      Alert.alert('Please input title of deck')
    } else {
      this.props.addDeck(deckTitle)
      .then(()=>{ this.props.navigation.navigate('DeckView', { deckId: deckTitle })})
      .then(this.setState({ deckTitle: ''}))
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.title}>
          What is the title of your new deck?
        </Text>
        <TextInput
          style={styles.input}
          placeholder={'Deck Title'}
          onChangeText={title => this.setState({ deckTitle: title })}
          value={this.state.deckTitle}
        />
        <Button text='Submit' backgroundColor='blue' textColor='white'
          onPress={this.AddDeck}
          >
        </Button>
      </KeyboardAvoidingView>
    )
  }
}


const styles=StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: white,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 4,
    margin: 20,
    width: 250,
    height: 30,
  },
})

const mapDispatchToProps = {addDeck}

export default connect(null,mapDispatchToProps)(AddDeck)
