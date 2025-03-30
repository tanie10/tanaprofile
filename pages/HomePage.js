import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerPage from "../screens/DrawerPage";
import TabPage from "../screens/TabPage";

const Drawer = createDrawerNavigator();

export default function HomePage() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerPage {...props} />}>
      {/* Add the bottom tabs as one of the drawer items */}
      <Drawer.Screen name="Tabs" component={TabPage} />
    </Drawer.Navigator>
  );
}
