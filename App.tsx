import appConfig from "./tamagui.config";
import useTamaguiFonts from "./src/hooks/useTamaguiFonts";
import Navigation from "./src/navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "react-query";
import { TamaguiProvider } from "@tamagui/core";

// import { ApiProvider } from "@reduxjs/toolkit/query/react";
// import { apiCharger } from "./src/services/api-chargers";

const queryClient = new QueryClient();

export default function App() {
  const fontsLoaded = useTamaguiFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TamaguiProvider config={appConfig}>
      <GestureHandlerRootView>
        <QueryClientProvider client={queryClient}>
            <Navigation />
        </QueryClientProvider>
      </GestureHandlerRootView>
    </TamaguiProvider>
  );
}
