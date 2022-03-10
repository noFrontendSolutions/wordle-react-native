import { StatusBar } from "expo-status-bar"
import { Alert, StyleSheet, Text, View } from "react-native"
import Keyboard from "./Keyboard"
import Board from "./Board"
import { Dispatch, useState } from "react"

import targetWords from "./target-words.json"

export default function App() {
  const [currentRound, setCurrentRound] = useState(0)
  const [guesses, setGuesses] = useState(["", "", "", "", "", ""])
  const [currentGuess, setCurrentGuess] = useState("")
  const [secretWord, setSecretWord] = useState(chooseSecretWord(targetWords))
  const [hasWon, setHasWon] = useState(false)
  const [hasLost, setHasLost] = useState(false)

  const [keyboardColors, setKeyboardColors] = useState<string[][]>([
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ])
  const [boardColors, setBoardColors] = useState<string[][]>([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ])

  if (hasWon || hasLost) {
    winLostHandler(
      secretWord,
      hasWon,
      hasLost,
      setKeyboardColors,
      setBoardColors,
      setCurrentRound,
      setSecretWord,
      setCurrentGuess,
      setGuesses,
      setHasWon,
      setHasLost
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Wordle</Text>
      <Board
        currentRound={currentRound}
        currentGuess={currentGuess}
        guesses={guesses}
        boardColors={boardColors}
      />
      <Keyboard
        currentRound={currentRound}
        currentGuess={currentGuess}
        boardColors={boardColors}
        guesses={guesses}
        secretWord={secretWord}
        keyboardColors={keyboardColors}
        hasWon={hasWon}
        hasLost={hasLost}
        setCurrentGuess={setCurrentGuess}
        setGuesses={setGuesses}
        setCurrentRound={setCurrentRound}
        setBoardColors={setBoardColors}
        setKeyboardColors={setKeyboardColors}
        setHasWon={setHasWon}
        setHasLost={setHasLost}
      />
      <StatusBar style="auto" />
    </View>
  )
}

const winLostHandler = async (
  secretWord: string,
  hasWon: boolean,
  hasLost: boolean,
  setKeyboardColors: Dispatch<React.SetStateAction<string[][]>>,
  setBoardColors: Dispatch<React.SetStateAction<string[][]>>,
  setCurrentRound: Dispatch<React.SetStateAction<number>>,
  setSecretWord: Dispatch<React.SetStateAction<string>>,
  setCurrentGuess: Dispatch<React.SetStateAction<string>>,
  setGuesses: Dispatch<React.SetStateAction<string[]>>,
  setHasWon: Dispatch<React.SetStateAction<boolean>>,
  setHasLost: Dispatch<React.SetStateAction<boolean>>
) => {
  setCurrentGuess("")
  setGuesses(["", "", "", "", "", ""])
  setCurrentRound(0)
  setBoardColors([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ])
  setKeyboardColors([
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ])
  setSecretWord(chooseSecretWord(targetWords))
  setHasWon(false)
  setHasLost(false)

  if (hasWon) {
    Alert.alert(
      "Congratiolations!",
      `Your guess was correct. The secret word is "${secretWord.toUpperCase()}".`,
      [{ text: "Start New Game" }]
    )
  } else if (hasLost) {
    Alert.alert(
      "Sorry!",
      `You Lost. The secret word was "${secretWord.toUpperCase()}".`,
      [{ text: "Start New Game" }]
    )
  }
}

const chooseSecretWord = (wordArray: string[]): string => {
  const randomIndex = Math.floor(Math.random() * wordArray.length)
  return wordArray[randomIndex]
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  header: {
    fontSize: 20,
    fontWeight: "900",
  },
})
