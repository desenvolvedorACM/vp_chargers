import React, { useMemo } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { Button, Separator, Text, YStack, Input, XStack } from "tamagui";
import SearchHorizontalScroll from "../SearchHorizontalScroll";
import { Search } from "@tamagui/lucide-icons";

type Props = {
  bottomSheetRef: any;
};

export default function CustomBottomSheet({ bottomSheetRef }: Props) {
  const snapPoints = useMemo(() => ["35%", "50%", "90%"], []);

  return (
    <BottomSheet index={0} ref={bottomSheetRef} snapPoints={snapPoints}>
      <YStack p="$3" bg="$white">
        <XStack
          borderRadius="$3"
          p="$1"
          backgroundColor="$gray3"
          ai="center"
          jc="center"
        >
          <Search size="$1" />
          <Input
            w="85%"
            p="$2"
            placeholder={`Where to?`}
            borderWidth={0}
            backgroundColor="$gray3"
          />
        </XStack>

        <SearchHorizontalScroll />

        <Separator marginVertical={10} />

        <Button borderRadius="$10" bg="#e5fc0a" mt={10}>
          <Text color="$black1" fontSize={16}>
            Set time
          </Text>
        </Button>
      </YStack>
    </BottomSheet>
  );
}
