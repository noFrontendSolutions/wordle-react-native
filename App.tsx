import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import Keyboard from "./Keyboard"
import Board from "./Board"
import { useState } from "react"

import targetWords from "./target-words.json"

export default function App() {
  const [currentRound, SetCurrentRound] = useState(0)
  const [guesses, setGuesses] = useState(["", "", "", "", "", ""])
  const [currentGuess, setCurrentGuess] = useState("")
  const [secretWord, setSecretWord] = useState(chooseSecretWord(targetWords))
  const [boardColors, setBoardColors] = useState<string[][]>([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ])
  console.log(secretWord)
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Wordle</Text>
      <Board
        currentRound={currentRound}
        currentGuess={currentGuess}
        guesses={guesses}
        boardColors={boardColors}
        setBoardColors={setBoardColors}
      />
      <Keyboard
        currentRound={currentRound}
        currentGuess={currentGuess}
        boardColors={boardColors}
        guesses={guesses}
        secretWord={secretWord}
        setCurrentGuess={setCurrentGuess}
        setGuesses={setGuesses}
        setCurrentRound={SetCurrentRound}
        setBoardColors={setBoardColors}
      />
      <StatusBar style="auto" />
    </View>
  )
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

const chooseSecretWord = (wordArray: string[]): string => {
  const randomIndex = Math.floor(Math.random() * wordArray.length)
  return wordArray[randomIndex]
}
