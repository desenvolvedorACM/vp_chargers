import { Spinner, YStack } from "tamagui";

export function Loading() {
  return (
    <YStack f={1} padding="$3" space="$4" ai="center" jc="center">
      <Spinner size="large" color="$black10" />
    </YStack>
  );
}
