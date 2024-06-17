import { useFonts } from "expo-font";

function useTamaguiFonts() {
    const [loaded] = useFonts({
        Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
        InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    });

    return loaded;
}

export default useTamaguiFonts;