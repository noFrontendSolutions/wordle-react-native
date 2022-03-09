import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import Keyboard from "./Keyboard"
import Board from "./Board"
import { useState } from "react"

export default function App() {
  const [currentRound, SetCurrentRound] = useState(0)
  const [guesses, setGuesses] = useState(["", "", "", "", "", ""])
  const [currentGuess, setCurrentGuess] = useState("")

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Wordle</Text>
      <Board
        currentRound={currentRound}
        currentGuess={currentGuess}
        guesses={guesses}
      />
      <Keyboard
        currentRound={currentRound}
        currentGuess={currentGuess}
        guesses={guesses}
        setCurrentGuess={setCurrentGuess}
        setGuesses={setGuesses}
        setCurrentRound={SetCurrentRound}
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
