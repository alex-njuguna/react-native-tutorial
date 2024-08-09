import React from "react"
import {
  SafeAreaView,
    View,
    Text,
    Button
} from "react-native"

function App() {
  return (
      <SafeAreaView>
        <View>
          <Text>Hello Word</Text>
          <Text>Hello Word</Text>
          <Text>Hello Word</Text>
          <Button title="This is a Button" onPress={() => {alert("Button pressed")}}/>
        </View>
      </SafeAreaView>

  )
}

export default App