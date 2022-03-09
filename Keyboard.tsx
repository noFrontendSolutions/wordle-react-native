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
  keyboardColors,
  setCurrentGuess,
  setGuesses,
  setCurrentRound,
  setBoardColors,
  setKeyboardColors,
}: {
  currentRound: number
  currentGuess: string
  guesses: string[]
  boardColors: string[][]
  secretWord: string
  keyboardColors: string[][]
  setCurrentGuess: Dispatch<React.SetStateAction<string>>
  setGuesses: Dispatch<React.SetStateAction<string[]>>
  setCurrentRound: Dispatch<React.SetStateAction<number>>
  setBoardColors: Dispatch<React.SetStateAction<string[][]>>
  setKeyboardColors: Dispatch<React.SetStateAction<string[][]>>
}) => {
  const firstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
  const secondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
  const thirdRow = ["Z", "X", "C", "V", "B", "N", "M"]

  return (
    <View style={styles.keyboard}>
      <View style={styles.row}>
        {firstRow.map((letter, index) => {
          return (
            <Pressable
              key={letter}
              style={[
                styles.keyboardButton,
                keyboardColors[0][index] === "perfectMatch"
                  ? styles.keyboardPerfectMatchView
                  : keyboardColors[0][index] === "match"
                  ? styles.keyboardMatchView
                  : keyboardColors[0][index] === "noMatch"
                  ? styles.keyboardNoMatchView
                  : styles.keyboardButton,
              ]}
              onPress={() =>
                handleLetter(letter, currentGuess, setCurrentGuess)
              }
            >
              <Text
                style={
                  keyboardColors[0][index] === "perfectMatch"
                    ? styles.keyboardPerfectMatchText
                    : keyboardColors[0][index] === "match"
                    ? styles.keyboardMatchText
                    : keyboardColors[0][index] === "noMatch"
                    ? styles.keyboardNoMatchText
                    : styles.noStyles
                }
              >
                {letter}
              </Text>
            </Pressable>
          )
        })}
      </View>
      <View style={styles.row}>
        {secondRow.map((letter, index) => {
          return (
            <Pressable
              key={letter}
              style={[
                styles.keyboardButton,
                keyboardColors[1][index] === "perfectMatch"
                  ? styles.keyboardPerfectMatchView
                  : keyboardColors[1][index] === "match"
                  ? styles.keyboardMatchView
                  : keyboardColors[1][index] === "noMatch"
                  ? styles.keyboardNoMatchView
                  : styles.keyboardButton,
              ]}
              onPress={() =>
                handleLetter(letter, currentGuess, setCurrentGuess)
              }
            >
              <Text
                style={
                  keyboardColors[1][index] === "perfectMatch"
                    ? styles.keyboardPerfectMatchText
                    : keyboardColors[1][index] === "match"
                    ? styles.keyboardMatchText
                    : keyboardColors[1][index] === "noMatch"
                    ? styles.keyboardNoMatchText
                    : styles.noStyles
                }
              >
                {letter}
              </Text>
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
              keyboardColors,
              firstRow,
              secondRow,
              thirdRow,
              setCurrentGuess,
              setGuesses,
              setCurrentRound,
              setBoardColors,
              setKeyboardColors
            )
          }
        >
          <Text>Enter</Text>
        </Pressable>
        {thirdRow.map((letter, index) => {
          return (
            <Pressable
              key={letter}
              style={[
                styles.keyboardButton,
                keyboardColors[2][index] === "perfectMatch"
                  ? styles.keyboardPerfectMatchView
                  : keyboardColors[2][index] === "match"
                  ? styles.keyboardMatchView
                  : keyboardColors[2][index] === "noMatch"
                  ? styles.keyboardNoMatchView
                  : styles.keyboardButton,
              ]}
              onPress={() =>
                handleLetter(letter, currentGuess, setCurrentGuess)
              }
            >
              <Text
                style={
                  keyboardColors[2][index] === "perfectMatch"
                    ? styles.keyboardPerfectMatchText
                    : keyboardColors[2][index] === "match"
                    ? styles.keyboardMatchText
                    : keyboardColors[2][index] === "noMatch"
                    ? styles.keyboardNoMatchText
                    : styles.noStyles
                }
              >
                {letter}
              </Text>
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
  keyboardColors: string[][],
  firstRow: string[],
  secondRow: string[],
  thirdRow: string[],
  setCurrentGuess: Dispatch<React.SetStateAction<string>>,
  setGuesses: Dispatch<React.SetStateAction<string[]>>,
  setCurrentRound: Dispatch<React.SetStateAction<number>>,
  setBoardColors: Dispatch<React.SetStateAction<string[][]>>,
  setKeyboardColors: Dispatch<React.SetStateAction<string[][]>>
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
      `Your guess was correct. The secret word is "${secretWord.toUpperCase()}"`,
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
          return [...evaluateBoardMatches(currentGuess, secretWord)]
        return (row = row)
      })
    )
    setKeyboardColors(
      evaluateKeyboardMatches(
        currentGuess,
        secretWord,
        firstRow,
        secondRow,
        thirdRow,
        keyboardColors
      )
    )

    setCurrentRound(currentRound + 1)
    setCurrentGuess("")
  }
}

const evaluateBoardMatches = (guess: string, secretWord: string) => {
  const guessArray = guess.toLowerCase().split("")
  const secretWordArray = secretWord.toLowerCase().split("")
  let styles = ["noMatch", "noMatch", "noMatch", "noMatch", "noMatch"]
  guessArray.forEach((letter, index) => {
    if (
      secretWordArray.includes(letter) &&
      guessArray[index] === secretWordArray[index]
    ) {
      styles[index] = "perfectMatch"
    } else if (secretWordArray.includes(letter)) {
      styles[index] = "match"
    }
  })
  return styles
}

const evaluateKeyboardMatches = (
  guess: string,
  secretWord: string,
  firstRow: string[],
  secondRow: string[],
  thirdRow: string[],
  keyboardColors: string[][]
) => {
  const guessArray = guess.toLowerCase().split("")
  const secretWordArray = secretWord.toLowerCase().split("")
  let firstRowMatches = keyboardColors[0]
  let secondRowMatches = keyboardColors[1]
  let thirdRowMatches = keyboardColors[2]

  guessArray.forEach((letter, index) => {
    if (
      secretWordArray.includes(letter) &&
      guessArray[index] === secretWordArray[index]
    ) {
      firstRow.includes(letter.toUpperCase())
        ? (firstRowMatches[firstRow.indexOf(letter.toUpperCase())] =
            "perfectMatch")
        : secondRow.includes(letter.toUpperCase())
        ? (secondRowMatches[secondRow.indexOf(letter.toUpperCase())] =
            "perfectMatch")
        : (thirdRowMatches[thirdRow.indexOf(letter.toUpperCase())] =
            "perfectMatch")
    } else if (secretWordArray.includes(letter)) {
      firstRow.includes(letter.toUpperCase()) &&
      firstRowMatches[firstRow.indexOf(letter.toUpperCase())] !== "perfectMatch"
        ? (firstRowMatches[firstRow.indexOf(letter.toUpperCase())] = "match")
        : secondRow.includes(letter.toUpperCase())
        ? (secondRowMatches[secondRow.indexOf(letter.toUpperCase())] = "match")
        : (thirdRowMatches[thirdRow.indexOf(letter.toUpperCase())] = "match")
    } else if (!secretWordArray.includes(letter)) {
      firstRow.includes(letter.toUpperCase()) &&
      (firstRowMatches[firstRow.indexOf(letter.toUpperCase())] !==
        "perfectMatch" ||
        "match")
        ? (firstRowMatches[firstRow.indexOf(letter.toUpperCase())] = "noMatch")
        : secondRow.includes(letter.toUpperCase())
        ? (secondRowMatches[secondRow.indexOf(letter.toUpperCase())] =
            "noMatch")
        : (thirdRowMatches[thirdRow.indexOf(letter.toUpperCase())] = "noMatch")
    }
  })
  return [firstRowMatches, secondRowMatches, thirdRowMatches]
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
  keyboardMatchText: {
    color: "white",
  },
  keyboardMatchView: {
    backgroundColor: "#c9b458",
  },
  keyboardPerfectMatchText: {
    color: "white",
  },
  keyboardPerfectMatchView: {
    backgroundColor: "#6aaa64",
  },
  keyboardNoMatchText: {
    color: "white",
  },
  keyboardNoMatchView: {
    backgroundColor: "#787c7e",
  },
  noStyles: {},
})

export default Keyboard
