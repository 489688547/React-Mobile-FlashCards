import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { white, purple, black, red, blue } from '../utils/colors'
import { connect} from 'react-redux'
import Button from './Button'

class Quiz extends Component {
  state = {
    currentQuestion : 0,
    showAnswer : false,
    correctCount: 0,
  }

  Correct = () => {
    const { currentQuestion, correctCount } = this.state
    this.setState({
      currentQuestion : currentQuestion + 1,
      correctCount : correctCount + 1,
      showAnswer : false,
    })
  }

  Incorrect = () => {
    const { currentQuestion } = this.state
    this.setState({
      currentQuestion : currentQuestion + 1,
      showAnswer : false,
    })
  }

  ShowAnswer = () => {
    this.setState({
      showAnswer : !this.state.showAnswer
    })
  }

  Restart = () => {
    this.setState({
      currentQuestion: 0,
      showAnswer : false,
      correctCount: 0,
    })
  }

  render() {
    const { navigation, decks } = this.props
    const { currentQuestion, showAnswer, correctCount } = this.state
    const { deckId } = navigation.state.params
    const questions = decks[deckId].questions
    const questionsNum = questions.length

    if (questionsNum === 0) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>
            No Cards in Deck
          </Text>
        </View>
      )
    }

    if (currentQuestion == questionsNum) {
      const score = 100 * correctCount / questionsNum
      return (
        <View style={styles.container}>
          <Text style={styles.text}>
            Score:{`${Math.round(score)}`} %
          </Text>
          <Text>
            {correctCount} out of {questionsNum} correct
          </Text>
          <Button text='Restart' backgroundColor='purple' textColor='white'
            onPress={() => this.Restart()}
          >
          </Button>
          <Button text='Back to DeckList' backgroundColor='black' textColor='white'
            onPress={() => this.props.navigation.navigate('DeckList')}
          >
          </Button>
        </View>
      )
    }

    const { answer, question } = questions[currentQuestion]

    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {showAnswer ? answer : question}
        </Text>
        <TouchableOpacity style={{ margin: 15 }}
          onPress={() => this.ShowAnswer()}
        >
          <Text style={{ color: red }}>
            {showAnswer ? 'Question' : 'Answer'}
          </Text>
        </TouchableOpacity>
        <Text>
          Question {currentQuestion + 1} of {questionsNum}
        </Text>

        <Button text='Correct' backgroundColor='green' textColor='white'
          onPress={() => this.Correct()}
        >
        </Button>
        <Button text='Incorrect' backgroundColor='red' textColor='white'
          onPress={() => this.Incorrect()}
        >
        </Button>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    decks : state
  }
}

export default connect(mapStateToProps)(Quiz)

const styles=StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
})
