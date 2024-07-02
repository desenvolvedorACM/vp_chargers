import React, { useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import MapView, {
  MapPressEvent,
  Marker,
  MarkerPressEvent,
  Region,
} from "react-native-maps";
import { YStack } from "tamagui";
import CustomBottomSheet from "../../components/CustomBottomSheet";

import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetchData, addChargers } from "../../services";
import { IAddress, ICharger } from "../../models";

import icUnAvailable from "../../assets/images/unavailable.png";
import icAvailable from "../../assets/images/available.png";
// import CustomCalloutMap from "../../components/CustomCalloutMap";
import { Loading } from "../../components/Loading";

export default function Home() {
  const queryClient = useQueryClient();
  const mapViewRef = useRef<MapView>(null);
  const [isOpenEd, setIsOpenEd] = useState(false);
  const [selChargerAddress, setSelChargerAddress] = useState<IAddress>();

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
      >
        {chargers?.map((data: ICharger, idx: number) => {
          return (
            <Marker
              key={idx}
              coordinate={data?.location}
              image={data.available ? icAvailable : icUnAvailable}
              onPress={(event: MarkerPressEvent) => {               
                setIsOpenEd(!isOpenEd);
                setSelChargerAddress(data.address);

                const { latitude, longitude } = event.nativeEvent.coordinate;
                const region: Region = {
                  latitude,
                  longitude,
                  latitudeDelta: 0.003,
                  longitudeDelta: 0.003,
                };

                mapViewRef.current?.animateToRegion(region);
              }}
            />
          );
        })}
      </MapView>
      <CustomBottomSheet
         isOpenEd={isOpenEd}
         selectedAddress={selChargerAddress}
      />
    </YStack>
  );
}
