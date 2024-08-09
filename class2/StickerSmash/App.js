import React from "react"
import {
  SafeAreaView, Button, StyleSheet
} from "react-native"

import {AppPro} from "./appPro";

function App() {
  return (
      <SafeAreaView style={styles.appContainer}>
          <AppPro/>
          <Button title="Hello" onPress={() => {alert("Hello World!")}} />

      </SafeAreaView>

  )
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        flexDirection: "column",
    }
})

export default App