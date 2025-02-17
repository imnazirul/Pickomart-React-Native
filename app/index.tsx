import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { WebView } from 'react-native-webview';
import { BackHandler } from 'react-native';

const index = () => {
  const webViewRef = useRef<WebView | null>(null);
  const [canGoBack, setCanGoBack] = useState(true);

  useEffect(() => {
    const backAction = () => {
      if (canGoBack && webViewRef.current) {
        webViewRef.current.goBack();
        return true; // Prevents app from closing
      }
      return false; // Allows app to close if no back history
    };

    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, [canGoBack]);
  
  return (
    <SafeAreaView style={{flex:1, backgroundColor:"#161622"}}>
      <WebView ref={webViewRef}
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