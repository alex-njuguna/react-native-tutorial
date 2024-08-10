import React from "react";
import {
  SafeAreaView,
    ScrollView,
    View,
    StyleSheet
} from "react-native";
import {ElevatedCards, FlatCards} from "./components";

function App() {
  return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            <FlatCards/>
              <ElevatedCards/>
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