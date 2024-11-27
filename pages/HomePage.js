import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text } from "react-native";
import DrawerPage from "../screens/DrawerPage";

const Drawer = createDrawerNavigator();

export default function HomePage() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerPage {...props} />}>
      <Drawer.Screen name="MainScreen" component={MainScreen} />
    </Drawer.Navigator>
  );
}

function MainScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to the Main Screen!</Text>
    </View>
  );
}
