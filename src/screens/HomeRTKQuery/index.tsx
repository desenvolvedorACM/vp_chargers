import { useRef } from "react";
import { StyleSheet } from "react-native";
import MapView, {
  MapPressEvent,
  Marker,
  MarkerPressEvent,
  Region,
} from "react-native-maps";
import { YStack } from "tamagui";
import CustomBottomSheet from "../../components/CustomBottomSheet";
import BottomSheet from "@gorhom/bottom-sheet";

import { ICharger } from "../../models";

import icUnAvailable from "../../assets/images/unavailable.png";
import icAvailable from "../../assets/images/available.png";
import CustomCalloutMap from "../../components/CustomCalloutMap";
import { Loading } from "../../components/Loading";
import { apiCharger } from "../../services/api-chargers";
import CatchError from "../../components/CatchError";

const INITIAL_REGION = {
  latitude: -29.9109446,
  longitude: -51.18435968,
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
};

export default function HomeRTKQuery() {
  const mapViewRef = useRef<MapView>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const {
    data: chargers,
    isLoading,
    isError,
    error,
  } = apiCharger.useGetChargersQuery();
  const [addCharger] = apiCharger.useAddChargerMutation();

  function addMarkers(event: MapPressEvent) {
    const {
      nativeEvent: {
        coordinate: { latitude, longitude },
      },
    } = event;

    addCharger({ latitude, longitude });

    mapViewRef.current?.animateToRegion({
      latitude,
      longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    });
  }

  const onCloseBottomSheet = () => {
    bottomSheetRef.current?.close();
  };

  const onExpandBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  if (isLoading) {
    return <Loading />;
  }

  console.log(isError);

  if (isError) {
    return <CatchError error={error} />;
  }

  return (
    <YStack f={1}>
      <MapView
        ref={mapViewRef}
        showsUserLocation
        zoomEnabled
        pitchEnabled
        style={StyleSheet.absoluteFill}
        initialRegion={INITIAL_REGION}
        onPress={addMarkers}
      >
        {chargers?.map((data: ICharger, idx: number) => {
          return (
            <Marker
              key={idx}
              coordinate={data?.location}
              image={data.available ? icAvailable : icUnAvailable}
              onPress={(event: MarkerPressEvent) => {
                const { latitude, longitude } = event.nativeEvent.coordinate;
                const region: Region = {
                  latitude,
                  longitude,
                  latitudeDelta: 0.003,
                  longitudeDelta: 0.003,
                };

                mapViewRef.current?.animateToRegion(region);
              }}
            >
              <CustomCalloutMap
                name={data.name}
                address={`${data.address.street}, ${data.address.number}, ${data.address.city}`}
                chargePoint={`${data.chargePoint}`}
                price={`${data.price}`}
                parking={data.parking}
                type={data.type}
              />
            </Marker>
          );
        })}
      </MapView>
      <CustomBottomSheet bottomSheetRef={bottomSheetRef} />
    </YStack>
  );
}
