import { StyleSheet, Text, View } from "react-native"

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        Edit src/app/index.tsx to edit this screen.
      </Text>
      <Text>Hi</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // COLUMN DIRECTION IN MOBILE IN WEB ROW

    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    fontSize: 22,
  },
})
