import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  Feather,
  Ionicons,
  Entypo,
  Fontisto,
  AntDesign,
} from "@expo/vector-icons";

const TradeBoard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <Feather name="menu" size={24} color="black" />
        <View style={styles.notifContainer}>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </View>
      </View>
      <View style={styles.profile}>
        <View style={styles.imgContainer}>
          <Image
            source={require("../../assets/pic.jpg")}
            style={styles.image}
          />
        </View>
        <View style={styles.profileTextContainer}>
          <Text style={{ fontSize: 18 }}>Welcome back</Text>
          <Text
            style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}
          >
            Jamil
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={[styles.item, { backgroundColor: "rgb(255,241,205)" }]}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View
              style={{
                height: 50,
                width: 50,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 25,
              }}
            >
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "purple" }}
              >
                $
              </Text>
            </View>
            <View
              style={{
                height: 50,
                justifyContent: "space-between",
                marginHorizontal: 16,
              }}
            >
              <Text style={{ fontSize: 12, color: "#222" }}>Amount</Text>
              <Text style={{ fontSize: 18 }}>30000.5</Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end", padding: 16 }}>
              <Feather name="trending-up" size={24} color="rgb(227,147,44)" />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                height: "100%",
                width: "40%",
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Across Regions</Text>
              <Text style={{ color: "#777" }}>Avg daily(hrs)</Text>
            </View>
            <View style={{ height: "100%", width: "40%" }}>
              <Image
                source={require("../../assets/rate.png")}
                style={{ height: "100%", width: "100%" }}
              />
            </View>
          </View>
        </View>
        <View style={[styles.item, { backgroundColor: "rgb(253,213,222)" }]}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View
              style={{
                height: 50,
                width: 50,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 25,
              }}
            >
              <Entypo name="share-alternative" size={20} color="black" />
              {/* <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "purple" }}
              >
                $
              </Text> */}
            </View>
            <View
              style={{
                height: 50,
                justifyContent: "space-between",
                marginHorizontal: 16,
              }}
            >
              <Text style={{ fontSize: 12, color: "#222" }}>Shipment</Text>
              <Text style={{ fontSize: 18 }}>395 675 21</Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end", padding: 16 }}>
              <Fontisto name="heartbeat-alt" size={30} color="pink" />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                height: "100%",
                width: "40%",
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 17 }}>Distribution</Text>
              <Text style={{ color: "#777" }}>Bill amount(s)</Text>
            </View>
            <View style={{ height: "100%", width: "40%" }}>
              <Image
                source={require("../../assets/rated.png")}
                style={{ height: "100%", width: "100%" }}
              />
            </View>
          </View>
        </View>
        {/* <View
          style={[styles.item, { backgroundColor: "rgb(253,213,222)" }]}
        ></View> */}
      </View>
      <View style={styles.bottomNav}>
        <AntDesign name="home" size={24} color="black" />
        <Feather name="bar-chart-2" size={24} color="black" />
        <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />
        <Ionicons name="ios-wallet-outline" size={24} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  navContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },

  profile: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },

  content: {
    flex: 6,
    justifyContent: "space-between",
  },

  bottomNav: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  notifContainer: {
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(246,244,252)",
    borderRadius: 25,
    height: 50,
    width: 50,
  },

  imgContainer: {
    overflow: "hidden",
    flex: 7,
  },

  profileTextContainer: {
    flex: 3,
  },

  image: {
    resizeMode: "cover",
    height: 100,
    width: 100,
    borderRadius: 50,
  },

  item: {
    height: "48%",
    borderRadius: 10,
    padding: 16,
  },
});

export default TradeBoard;