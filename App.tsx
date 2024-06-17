import { TamaguiProvider } from "tamagui";
import appConfig from "./tamagui.config";
import useTamaguiFonts from "./src/hooks/useTamaguiFonts";
import Navigation from "./src/navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  const loadedFonts = useTamaguiFonts();

  if (!loadedFonts) {
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
