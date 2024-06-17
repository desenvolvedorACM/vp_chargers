import { Callout } from "react-native-maps";
import { Text, View, XStack } from "tamagui";

type Props = {
  name: string;
  address: string;
  chargePoint: string;
  parking: string;
  price: string;
  type: string;
};

export default function CustomCalloutMap({
  name,
  address,
  chargePoint,
  parking,
  price,
  type,
}: Props) {
  return (
    <Callout>
      <View w="$25" p="$3">
        <XStack>
          <Text fontWeight="bold" color="$black2" mr="$2">
            Name:
          </Text>
          <Text>{`${name}`}</Text>
        </XStack>
        <XStack>
          <Text fontWeight="bold" color="$black2" mr="$2">
            Address:
          </Text>
          <Text>{address}</Text>
        </XStack>
        <XStack>
          <Text fontWeight="bold" color="$black2" mr="$2">
            ChargePoint:
          </Text>
          <Text>{chargePoint}</Text>
        </XStack>
        <XStack>
          <Text fontWeight="bold" color="$black2" mr="$2">
            parking:
          </Text>
          <Text>{`${parking}`}</Text>
        </XStack>
        <XStack>
          <Text fontWeight="bold" color="$black2" mr="$2">
            Price:
          </Text>
          <Text>{`${price}`}</Text>
        </XStack>
        <XStack>
          <Text fontWeight="bold" color="$black2" mr="$2">
            Type:
          </Text>
          <Text>{`${type}`}</Text>
        </XStack>
      </View>
    </Callout>
  );
}
