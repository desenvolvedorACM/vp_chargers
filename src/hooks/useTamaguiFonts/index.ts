import { useFonts } from "expo-font";

function useTamaguiFonts() {
    const [fontsLoaded] = useFonts({
        InterLight: require("@tamagui/font-inter/otf/Inter-Light.otf"),
        InterRegular: require("@tamagui/font-inter/otf/Inter-Regular.otf"),
        Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
        InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    });

    return fontsLoaded;
}

export default useTamaguiFonts;