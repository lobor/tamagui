import { ToastProvider, ToastViewport } from '@tamagui/sandbox-ui'
import { setupNativeSheet } from '@tamagui/sheet'
import { useFonts } from 'expo-font'
import { useEffect, useMemo, useState } from 'react'
import { Appearance, useColorScheme } from 'react-native'
import { ModalView } from 'react-native-ios-modal'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'

import { Navigation } from './Navigation'
import { Provider } from './provider'
import { ThemeContext } from './useKitchenSinkTheme'

setupNativeSheet('ios', ModalView)

export default function App() {
  const [theme, setTheme] = useState(Appearance.getColorScheme())
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  const colorScheme = useColorScheme()

  useEffect(() => {
    setTheme(colorScheme)
  }, [colorScheme])

  const children = useMemo(() => {
    return <Navigation />
  }, [])

  const themeContext = useMemo(() => {
    return {
      value: theme,
      set: setTheme,
    }
  }, [theme])

  if (!loaded) {
    return null
  }

  return (
    <SafeAreaProvider>
      <ThemeContext.Provider value={themeContext}>
        <Provider defaultTheme={theme as any}>
          <ToastProvider swipeDirection="horizontal">
            {children}

            <SafeToastViewport />
          </ToastProvider>
        </Provider>
      </ThemeContext.Provider>
    </SafeAreaProvider>
  )
}

const SafeToastViewport = () => {
  const { left, top, right } = useSafeAreaInsets()
  return (
    <>
      <ToastViewport
        flexDirection="column-reverse"
        top={top}
        left={left}
        right={right}
        mx="auto"
      />
    </>
  )
}
