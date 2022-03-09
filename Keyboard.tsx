import { StyleSheet, Text, View, Pressable, Alert } from "react-native"
import React, { Dispatch } from "react"
import { Feather } from "@expo/vector-icons"
import dictionary from "./dictionary.json"

const Keyboard = ({
  currentRound,
  currentGuess,
  guesses,
  boardColors,
  secretWord,
  setCurrentGuess,
  setGuesses,
  setCurrentRound,
  setBoardColors,
}: {
  currentRound: number
  currentGuess: string
  guesses: string[]
  boardColors: string[][]
  secretWord: string
  setCurrentGuess: Dispatch<React.SetStateAction<string>>
  setGuesses: Dispatch<React.SetStateAction<string[]>>
  setCurrentRound: Dispatch<React.SetStateAction<number>>
  setBoardColors: Dispatch<React.SetStateAction<string[][]>>
}) => {
  const firstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
  const secondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
  const thirdRow = ["Z", "X", "C", "V", "B", "N", "M"]

  return (
    <View style={styles.keyboard}>
      <View style={styles.row}>
        {firstRow.map((letter) => {
          return (
            <Pressable
              key={letter}
              style={styles.keyboardButton}
              onPress={() =>
                handleLetter(letter, currentGuess, setCurrentGuess)
              }
            >
              <Text>{letter}</Text>
            </Pressable>
          )
        })}
      </View>
      <View style={styles.row}>
        {secondRow.map((letter) => {
          return (
            <Pressable
              key={letter}
              style={styles.keyboardButton}
              onPress={() =>
                handleLetter(letter, currentGuess, setCurrentGuess)
              }
            >
              <Text>{letter}</Text>
            </Pressable>
          )
        })}
      </View>
      <View style={styles.row}>
        <Pressable
          style={styles.broadButton}
          onPress={() =>
            handleEnter(
              currentRound,
              currentGuess,
              guesses,
              boardColors,
              secretWord,
              setCurrentGuess,
              setGuesses,
              setCurrentRound,
              setBoardColors
            )
          }
        >
          <Text>Enter</Text>
        </Pressable>
        {thirdRow.map((letter) => {
          return (
            <Pressable
              key={letter}
              style={styles.keyboardButton}
              onPress={() =>
                handleLetter(letter, currentGuess, setCurrentGuess)
              }
            >
              <Text>{letter}</Text>
            </Pressable>
          )
        })}
        <Pressable
          style={styles.broadButton}
          onPress={() => handleDelete(currentGuess, setCurrentGuess)}
        >
          <Feather name="delete" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  keyboard: {
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  keyboardButton: {
    borderRadius: 5,
    width: 25,
    height: 35,
    margin: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D3D6DA",
  },
  broadButton: {
    borderRadius: 5,
    width: 45,
    height: 35,
    margin: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D3D6DA",
  },
})

const handleLetter = (
  letter: string,
  currentGuess: string,
  setCurrentGuess: Dispatch<React.SetStateAction<string>>
) => {
  let filledFields = currentGuess
    .split("")
    .filter((field) => field !== "").length
  if (filledFields >= 5) {
    setCurrentGuess(currentGuess.slice(0, 4) + letter)
  } else {
    setCurrentGuess(currentGuess + letter)
  }
}

const handleDelete = (
  currentGuess: string,
  setCurrentGuess: Dispatch<React.SetStateAction<string>>
) => {
  let filledFields = currentGuess.split("").length
  if (filledFields === 0) return
  else {
    setCurrentGuess(currentGuess.slice(0, -1))
  }
}

const handleEnter = (
  currentRound: number,
  currentGuess: string,
  guesses: string[],
  boardColors: string[][],
  secretWord: string,
  setCurrentGuess: Dispatch<React.SetStateAction<string>>,
  setGuesses: Dispatch<React.SetStateAction<string[]>>,
  setCurrentRound: Dispatch<React.SetStateAction<number>>,
  setBoardColors: Dispatch<React.SetStateAction<string[][]>>
) => {
  if (currentGuess.split("").length !== 5) {
    Alert.alert("Warning", "Words need to be exactly five letters long.", [
      { text: "Ok" },
    ])
  } else if (!dictionary.includes(currentGuess.toLowerCase())) {
    Alert.alert(
      "Warning",
      `Sorry, "${currentGuess}" is not included in the english dictionary.`,
      [{ text: "Ok" }]
    )
  } else if (currentGuess.toLocaleLowerCase() === secretWord) {
    Alert.alert(
      "Congratiolations!",
      `Your guess was correct! The secret word is "${secretWord.toUpperCase()}"`,
      [{ text: "Start New Game" }]
    )
  } else {
    setGuesses(
      guesses.map((guess, index) => {
        if (index !== currentRound) {
          return guess
        } else {
          return (guess = currentGuess)
        }
      })
    )
    setBoardColors(
      boardColors.map((row, index) => {
        if (index === currentRound)
          return [...evaluateRowColors(currentGuess, secretWord)]
        return (row = row)
      })
    )
    setCurrentRound(currentRound + 1)
    setCurrentGuess("")
  }
}

const evaluateRowColors = (guess: string, secretWord: string) => {
  const guessArray = guess.toLowerCase().split("")
  const secretWordArray = secretWord.toLowerCase().split("")
  let colors = ["noMatch", "noMatch", "noMatch", "noMatch", "noMatch"]
  guessArray.forEach((letter, index) => {
    if (
      secretWordArray.includes(letter) &&
      guessArray[index] === secretWordArray[index]
    ) {
      colors[index] = "perfectMatch"
    } else if (secretWordArray.includes(letter)) {
      colors[index] = "match"
    }
  })
  return colors
}

export default Keyboard
