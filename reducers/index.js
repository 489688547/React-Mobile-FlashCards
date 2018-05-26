import { RECEIVE_DECKS, ADD_DECK, ADD_CARD, } from '../actions'

export default function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK:
      return {
        ...state,
        [action.deckTitle]: {
          title: action.deckTitle,
          questions: []
        }
      }
    case ADD_CARD:
      return {
        ...state,
        [action.deckTitle]: {
          title: action.deckTitle,
          questions: [...state[action.deckTitle].questions, action.card]
        }
      }
    default:
      return state;
  }
}
