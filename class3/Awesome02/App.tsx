import React from "react";
import {
  SafeAreaView,
    ScrollView,
    View,
    StyleSheet
} from "react-native";
import {FlatCards} from "./components";

function App() {
  return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            <FlatCards/>
          </View>
        </ScrollView>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
    }
})

export default App