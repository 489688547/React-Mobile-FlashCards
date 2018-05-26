import * as api from '../utils/api'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export function fetchDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export function saveDeck (deckTitle)  {
  return {
    type: ADD_DECK,
    deckTitle,
  }
}

export function saveCard(deckTitle, card) {
  return {
    type: ADD_CARD,
    deckTitle,
    card,
  }
}

export function getDecks () {
  return dispatch => (
    api.getDecks()
    .then(data => dispatch(fetchDecks(data))
    )
  )
}

export function addDeck (title) {
  return dispatch => (
    api.addDeck(title)
    .then(() => dispatch(saveDeck(title))
    )
  )
}

export function addCard(deckTitle, card) {
  return dispatch => (
    api.addCard(deckTitle, card)
    .then(() => dispatch(saveCard(deckTitle, card))
    )
  )
}
