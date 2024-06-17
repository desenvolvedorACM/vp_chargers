import React from "react";
import { SafeAreaView as DefaultSafeAreaView, StatusBar } from "react-native";
// import { StyledSafeAreaView } from "./styles";

type Props = {
  children: React.ReactNode;
};

export default function SafeAreaView({ children }: Props) {
  return (
    <DefaultSafeAreaView
      style={{ flex: 1, marginTop: StatusBar.currentHeight }}
    >
      {children}
    </DefaultSafeAreaView>
  );
}
