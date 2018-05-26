import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import { black, gray, red} from '../utils/colors'
import Button from './Button'

class DeckView extends Component {
  render() {
    const { deck } = this.props

    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
    		  <Text style={{ fontSize: 30, color: 'black'}}>{deck.title}</Text>
    		  <Text style={{ fontSize: 20, color: 'gray' }}>{deck.questions.length} cards</Text>
    		</View>

        <Button text='Add Card'
          onPress={() => this.props.navigation.navigate('AddCard', { deckId: deck.title })}
        >
        </Button>

        <Button text='Start Quiz' backgroundColor='red'
          onPress={() => this.props.navigation.navigate('Quiz', { deckId: deck.title })}
        >
        </Button>
      </View>
    )
  }
}

function mapStateToProps(state, { navigation }) {
  const { deckId } = navigation.state.params
  return {
    deck: state[deckId]
  }
}

export default connect(mapStateToProps)(DeckView)

const styles=StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
