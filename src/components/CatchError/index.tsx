import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { Text, View } from "tamagui";

type Props = {
  error: any;
};

export default function CatchError({ error }: Props) {
  return (
    <View f={1} ai="center" jc="center">
      <Text fontSize={20} color="$red10">
        {error ? error.data : "something went wrong"}
      </Text>
    </View>
  );
}
