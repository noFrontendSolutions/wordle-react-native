import { View, Text, StyleSheet } from "react-native"
import React from "react"

const Board = ({
  currentRound,
  currentGuess,
  guesses,
}: {
  currentRound: number
  currentGuess: string
  guesses: string[]
}) => {
  const filledFields = currentGuess.split("").length
  const letterPositions = [0, 1, 2, 3, 4]
  return (
    <View>
      <View style={styles.rounds}>
        {letterPositions.map((position) => {
          return (
            <View style={styles.square} key={position}>
              <Text>
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
            <View style={styles.square} key={position}>
              <Text>
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
            <View style={styles.square} key={position}>
              <Text>
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
            <View style={styles.square} key={position}>
              <Text>
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
            <View style={styles.square} key={position}>
              <Text>
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
            <View style={styles.square} key={position}>
              <Text>
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
})

export default Board
