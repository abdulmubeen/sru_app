import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { AppNavigator } from "./navigation.component";
import { default as theme } from "./theme.json";
import { default as mapping } from "./mapping.json";

import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import * as SplashScreen from "expo-splash-screen";
import { Animated, StyleSheet, View } from "react-native";

SplashScreen.preventAutoHideAsync().catch(() => {});

import FlashMessage from "react-native-flash-message";

function AnimatedAppLoader({ children, image }) {
  const [isSplashReady, setSplashReady] = React.useState(false);

  const startAsync = React.useMemo(
    () => () => Asset.fromModule(image).downloadAsync(),
    [image]
  );

  const onFinish = React.useMemo(() => setSplashReady(true), []);

  if (!isSplashReady) {
    return (
      <AppLoading
        autoHideSplash={false}
        startAsync={startAsync}
        onError={console.error}
        onFinish={onFinish}
      />
    );
  }

  return <AnimatedSplashScreen image={image}>{children}</AnimatedSplashScreen>;
}

function AnimatedSplashScreen({ children, image }) {
  const animation = React.useMemo(() => new Animated.Value(1), []);
  const [isAppReady, setAppReady] = React.useState(false);
  const [isSplashAnimationComplete, setAnimationComplete] =
    React.useState(false);

  React.useEffect(() => {
    if (isAppReady) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => setAnimationComplete(true));
    }
  }, [isAppReady]);

  const onImageLoaded = React.useMemo(() => async () => {
    try {
      await SplashScreen.hideAsync();
      await new Promise((resolve) => setTimeout(resolve, 4100));
    } catch (e) {
    } finally {
      setAppReady(true);
    }
  });

  return (
    <View style={{ flex: 1 }}>
      {isAppReady && children}
      {!isSplashAnimationComplete && (
        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: "#222B45",
              opacity: animation,
            },
          ]}
        >
          <Animated.Image
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
              transform: [
                {
                  scale: animation,
                },
              ],
            }}
            source={require("./assets/sru_logo.gif")}
            onLoadEnd={onImageLoaded}
            fadeDuration={0}
          />
        </Animated.View>
      )}
    </View>
  );
}

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <AnimatedAppLoader image={{ require: "./assets/sru.png" }}>
      <ApplicationProvider
        {...eva}
        theme={{ ...eva.dark, ...theme }}
        customMapping={mapping}
      >
        <AppNavigator />
      </ApplicationProvider>
    </AnimatedAppLoader>
    <FlashMessage position="top" />
  </>
);
