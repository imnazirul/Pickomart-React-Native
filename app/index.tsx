import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { WebView } from 'react-native-webview';

const index = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <WebView
      style={styles.container}
      source={{ uri: 'https://pickomart.pythonanywhere.com/' }}
    />
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})