import { AsyncStorage } from 'react-native'
const FLASHCARD_STORAGE_KEY = 'mobile-flashcard'

export const getDecks = () =>
  AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
//  AsyncStorage.clear()
  .then((results) => (JSON.parse(results)))

export const addDeck = (title) =>
  AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY,
    JSON.stringify({
      [title]: {
        title,
        questions: []
      }
    })
  )

export const addCard = (title, card) =>
  AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
  .then((results) => {
    const decks = JSON.parse(results)
    decks[title].questions.push(card)
    AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(decks))
  }
)
