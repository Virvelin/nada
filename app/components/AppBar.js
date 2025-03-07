import React from "react";
import { Appbar } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";

export default function AppBar({ navigation, route, options, back }) {
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header>
      {back ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : (
        <Appbar.Action
          icon="arrow-right"
          onPress={() => navigation.navigate("second")}
        />
      )}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}
