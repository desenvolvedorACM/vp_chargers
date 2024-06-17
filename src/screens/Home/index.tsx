import { useEffect, useRef } from "react";
import { StyleSheet } from "react-native";
import MapView, {
  MapPressEvent,
  Marker,
  MarkerPressEvent,
  Region,
} from "react-native-maps";
import { Text, YStack } from "tamagui";
import CustomBottomSheet from "../../components/CustomBottomSheet";
import BottomSheet from "@gorhom/bottom-sheet";

import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetchData, addChargers } from "../../services";
import { ICharger } from "../../models";

import icUnAvailable from "../../assets/images/unavailable.png";
import icAvailable from "../../assets/images/available.png";
import CustomCalloutMap from "../../components/CustomCalloutMap";
import { Loading } from "../../components/Loading";

export default function Home() {
  const queryClient = useQueryClient();
  const mapViewRef = useRef<MapView>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const INITIAL_REGION = {
    latitude: -29.9109446,
    longitude: -51.18435968,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  };

  const { data: chargers, isLoading } = useQuery({
    queryFn: () => fetchData(),
    queryKey: ["chargers"],
    staleTime: Infinity,
    cacheTime: 0,
  });

  const mutation = useMutation({
    mutationFn: addChargers,
    mutationKey: ["chargers"],
    onSuccess(data) {
      queryClient.invalidateQueries("chargers");
    },
    onError(err) {
      console.log(err);
    },
  });

  function addMarkers(event: MapPressEvent) {
    const {
      nativeEvent: {
        coordinate: { latitude, longitude },
      },
    } = event;

    mutation.mutate({ latitude, longitude });
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

  // useEffect(() => {
  //   focusMap(-29.9033668, -51.180447);
  // }, []);

  if (isLoading) {
    return <Loading />;
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
