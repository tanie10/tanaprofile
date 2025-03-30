import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

export default function DrawerPage(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <View style={styles.avatar} />
          <View>
            <Text style={styles.name}>Tana Alexnadra</Text>
            <Text style={styles.email}>lastimosa.tana2004@gmail.com</Text>
          </View>
        </View>
      </View>
      <DrawerItem
        label="Profile"
        onPress={() => alert("Navigating to My Files")}
      />
      <DrawerItem
        label="Settings"
        onPress={() => alert("Navigating to Shared with me")}
      />
      <DrawerItem label="Library" onPress={() => alert("Navigating to Starred")} />
      <DrawerItem label="Gallery" onPress={() => alert("Navigating to Recent")} />
      <DrawerItem label="About" onPress={() => alert("Navigating to Offline")} />
      <DrawerItem label="Contact" onPress={() => alert("Navigating to Uploads")} />
      <DrawerItem label="Logout" onPress={() => alert("Navigating to Backups")} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ccc",
    marginRight: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  email: {
    color: "#555",
  },
});
