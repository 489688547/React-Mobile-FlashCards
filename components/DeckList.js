import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { getDecks } from '../actions';
import { black, gray } from '../utils/colors';
import Button from './Button'

class DeckList extends Component {
  componentDidMount() {
    this.props.getDecks();
  }

  render() {
    const { decks } = this.props
    return (
      <ScrollView>
        {Object.keys(decks).length > 0
          ? (Object.keys(decks).map(key => {
            const deck = decks[key]
            return (
              <TouchableOpacity
                key={key}
                style={styles.deck}
                onPress={() => this.props.navigation.navigate('DeckView', {deckId: key})}
              >
                <View>
                  <Text style={styles.nameText}>{deck.title}</Text>
                  <Text style={styles.countText}>{deck.questions.length} {deck.questions.length === 1 ? 'card' : 'cards'}</Text>
                </View>
              </TouchableOpacity>
            )}))
          : (
            <View style={{alignItems: 'center'}}>
              <Text style={styles.countText}>There is no deck yet.</Text>
              <Button text='Add Deck'
                onPress={() => this.props.navigation.navigate('AddDeck')}
              >
              </Button>
            </View>
          )}

      </ScrollView>
    )
  }
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deck : {
    borderColor: black,
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
    width: 350,
  },
  nameText: {
    fontSize: 30,
    margin: 5,
    textAlign: 'center',
  },
  countText: {
    fontSize: 20,
    margin: 5,
    textAlign: 'center',
    color: gray,
  },
})

const mapStateToProps = state => ({
  decks: state,
})

const mapDispatchToProps = { getDecks }

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)
