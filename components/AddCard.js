import React, { Component } from 'react';
import { Alert, KeyboardAvoidingView, Text, TextInput, StyleSheet } from 'react-native';
import { addCard } from '../actions';
import { connect } from 'react-redux';
import { white, black } from '../utils/colors';
import Button from './Button';

class AddCard extends Component {
  state = {
    question : '',
    answer: '',
  }

  submit = () => {
    const { navigation, addCard } = this.props
    const { question, answer } = this.state

    if (!question) {
	  Alert.alert('Please enter question')
      return;
    }
    if (!answer) {
	  Alert.alert('Please enter answer')
      return;
    }
    addCard(navigation.state.params.deckId, { question, answer })
    .then(() => this.props.navigation.goBack())
    .then(this.setState({ question: '', answer: '' }))
  }

  render() {
    const { question, answer } = this.state;
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Question'
          value={question}
          onChangeText={question => this.setState({ question })}
        />
        <TextInput
          style={styles.input}
          placeholder='Answer'
          value={answer}
          onChangeText={answer => this.setState({ answer })}
        />
        <Button text='Submit' onPress={this.submit} >
        </Button>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
  input: {
    backgroundColor: white,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 4,
    margin: 20,
    width: 250,
    height: 30,
  }
});


const mapDispatchToProps = { addCard }

export default connect(null, mapDispatchToProps)(AddCard);
