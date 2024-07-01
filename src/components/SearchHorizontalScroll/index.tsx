import { Circle, ScrollView, XStack, YStack, Text } from "tamagui";
import {
  Search,
  CheckCircle2 as Checked,
  Utensils as Dinner,
  Sliders as AllFilters,
  SmartphoneCharging as Fast,
  MapPin as MapLocation,
  MapPinned as UserMap,
  Coffee,
  ZapOff,
  BatteryFull,
  BatteryCharging,
  Zap as ZapFast
} from "@tamagui/lucide-icons";

// import Icon from "@expo/vector-icons/Feather";
import { searchIcons } from "../../utils";
import { ISearchIcon } from "../../models";
// import { FlatList } from "react-native";

const tIcons: any = {
  Search: <Search size="$2" />,
  Zap: <ZapFast size="$2" />,
  Checked: <Checked size="$2" />,
  Dinner: <Dinner size="$2" />,
  Fast: <Fast size="$2" />,
  Sliders: <AllFilters size="$2" />,
  MapLocation: <MapLocation size="$2" />,
  UserMap: <UserMap size="$2" />,
  Coffee: <Coffee size="$2" />,
  ZapOff: <ZapOff size="$2" />,
  BatteryFull: <BatteryFull size="$2" />,
  BatteryCharging: <BatteryCharging size="$2" />,
};

type Props = {
  onPress: () => void
}

export default function SearchHorizontalScroll({ onPress}: Props) {
  return (
    <ScrollView w="100%" mt="$2" horizontal>
      {searchIcons.map((item: ISearchIcon, idx: number) => {
        return (
          <YStack p="$2" mt="$2" key={idx} ai="center">
            <XStack>
              <Circle
                onPress={onPress}
                w={55}
                h={55}
                ai={"center"}
                jc="center"
                bg="$white1"
                shadowColor="$black025"
                shadowOffset={{
                  width: 0,
                  height: 2,
                }}
                shadowOpacity={0.25}
                shadowRadius={3.84}
                elevation={5}
              >
                {tIcons[`${item?.icon}`]}
              </Circle>
            </XStack>
            <YStack ai="center" mt="$2">
              <Text textAlign="center">{item.text}</Text>
            </YStack>
          </YStack>
        );
      })}
    </ScrollView>
  );
}
