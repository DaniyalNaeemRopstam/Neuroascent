import React from 'react';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: 'https://app.neuroascent.com/' }} />
    </SafeAreaView>
  );
};

export default App;
