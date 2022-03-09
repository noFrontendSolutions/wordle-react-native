import { View, Text, StyleSheet } from "react-native"
import React, { Dispatch } from "react"

const Board = ({
  currentRound,
  currentGuess,
  guesses,
  boardColors,
  setBoardColors,
}: {
  currentRound: number
  currentGuess: string
  guesses: string[]
  boardColors: string[][]
  setBoardColors: Dispatch<React.SetStateAction<string[][]>>
}) => {
  const filledFields = currentGuess.split("").length
  const letterPositions = [0, 1, 2, 3, 4]
  return (
    <View>
      <View style={styles.rounds}>
        {letterPositions.map((position) => {
          return (
            <View
              style={[
                styles.square,
                currentRound > 0 && boardColors[0][position] === "perfectMatch"
                  ? styles.perfectMatch
                  : currentRound > 0 && boardColors[0][position] === "match"
                  ? styles.match
                  : currentRound > 0 && styles.noMatch,
              ]}
              key={position}
            >
              <Text style={currentRound > 0 ? styles.textPost : styles.textPre}>
                {currentRound !== 0
                  ? guesses[0].split("")[position]
                  : guesses[0] !== ""
                  ? guesses[0].split("")[position]
                  : filledFields >= position
                  ? currentGuess.split("")[position]
                  : ""}
              </Text>
            </View>
          )
        })}
      </View>
      <View style={styles.rounds}>
        {letterPositions.map((position) => {
          return (
            <View
              style={[
                styles.square,
                currentRound > 1 && boardColors[1][position] === "perfectMatch"
                  ? styles.perfectMatch
                  : currentRound > 1 && boardColors[1][position] === "match"
                  ? styles.match
                  : currentRound > 1 && styles.noMatch,
              ]}
              key={position}
            >
              <Text style={currentRound > 1 ? styles.textPost : styles.textPre}>
                {currentRound !== 1 && guesses[1] !== ""
                  ? guesses[1].split("")[position]
                  : guesses[1] == "" && currentRound !== 1
                  ? ""
                  : guesses[1] !== ""
                  ? guesses[1].split("")[position]
                  : filledFields >= position
                  ? currentGuess.split("")[position]
                  : ""}
              </Text>
            </View>
          )
        })}
      </View>
      <View style={styles.rounds}>
        {letterPositions.map((position) => {
          return (
            <View
              style={[
                styles.square,
                currentRound > 2 && boardColors[2][position] === "perfectMatch"
                  ? styles.perfectMatch
                  : currentRound > 2 && boardColors[2][position] === "match"
                  ? styles.match
                  : currentRound > 2 && styles.noMatch,
              ]}
              key={position}
            >
              <Text style={currentRound > 2 ? styles.textPost : styles.textPre}>
                {currentRound !== 2 && guesses[2] !== ""
                  ? guesses[2].split("")[position]
                  : guesses[2] == "" && currentRound !== 2
                  ? ""
                  : guesses[2] !== ""
                  ? guesses[2].split("")[position]
                  : filledFields >= position
                  ? currentGuess.split("")[position]
                  : ""}
              </Text>
            </View>
          )
        })}
      </View>
      <View style={styles.rounds}>
        {letterPositions.map((position) => {
          return (
            <View
              style={[
                styles.square,
                currentRound > 3 && boardColors[3][position] === "perfectMatch"
                  ? styles.perfectMatch
                  : currentRound > 3 && boardColors[3][position] === "match"
                  ? styles.match
                  : currentRound > 3 && styles.noMatch,
              ]}
              key={position}
            >
              <Text style={currentRound > 3 ? styles.textPost : styles.textPre}>
                {currentRound !== 3 && guesses[3] !== ""
                  ? guesses[3].split("")[position]
                  : guesses[3] == "" && currentRound !== 3
                  ? ""
                  : guesses[3] !== ""
                  ? guesses[3].split("")[position]
                  : filledFields >= position
                  ? currentGuess.split("")[position]
                  : ""}
              </Text>
            </View>
          )
        })}
      </View>
      <View style={styles.rounds}>
        {letterPositions.map((position) => {
          return (
            <View
              style={[
                styles.square,
                currentRound > 4 && boardColors[4][position] === "perfectMatch"
                  ? styles.perfectMatch
                  : currentRound > 4 && boardColors[4][position] === "match"
                  ? styles.match
                  : currentRound > 4 && styles.noMatch,
              ]}
              key={position}
            >
              <Text style={currentRound > 4 ? styles.textPost : styles.textPre}>
                {currentRound !== 4 && guesses[4] !== ""
                  ? guesses[4].split("")[position]
                  : guesses[4] == "" && currentRound !== 4
                  ? ""
                  : guesses[4] !== ""
                  ? guesses[4].split("")[position]
                  : filledFields >= position
                  ? currentGuess.split("")[position]
                  : ""}
              </Text>
            </View>
          )
        })}
      </View>
      <View style={styles.rounds}>
        {letterPositions.map((position) => {
          return (
            <View
              style={[
                styles.square,
                currentRound > 5 && boardColors[5][position] === "perfectMatch"
                  ? styles.perfectMatch
                  : currentRound > 5 && boardColors[5][position] === "match"
                  ? styles.match
                  : currentRound > 5 && styles.noMatch,
              ]}
              key={position}
            >
              <Text style={currentRound > 5 ? styles.textPost : styles.textPre}>
                {currentRound !== 5 && guesses[5] !== ""
                  ? guesses[5].split("")[position]
                  : guesses[5] == "" && currentRound !== 5
                  ? ""
                  : guesses[5] !== ""
                  ? guesses[5].split("")[position]
                  : filledFields >= position
                  ? currentGuess.split("")[position]
                  : ""}
              </Text>
            </View>
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rounds: {
    flexDirection: "row",
  },
  square: {
    margin: 4,
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: "#D3D6DA",
    justifyContent: "center",
    alignItems: "center",
  },
  match: {
    backgroundColor: "#c9b458",
    borderColor: "#c9b458",
  },
  perfectMatch: {
    backgroundColor: "#6aaa64",
    borderColor: "#6aaa64",
  },
  noMatch: {
    backgroundColor: "#787c7e",
    borderColor: "#787c7e",
  },
  textPre: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
  textPost: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
})

export default Board
