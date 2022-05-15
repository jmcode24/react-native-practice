import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topNav}>
        <Ionicons name="arrow-back-outline" size={30} color="black" />
        <Text style={styles.topNavText}>Edit Profile</Text>
      </View>

      <View style={styles.picture}>
        <Image source={require("../../assets/m-g.jpeg")} style={styles.image} />
        <View style={styles.imageIcon}>
          <Ionicons name="ios-camera-outline" size={30} color="black" />
        </View>
      </View>

      <View style={styles.details}>
        <View>
          <Text style={styles.detailsLabel}>School</Text>
          <Text style={styles.labelText}>Duke University</Text>
        </View>
        <View style={{marginTop: 12}}>
          <Text style={styles.detailsLabel}>Email Address</Text>
          <Text style={styles.labelText}>mel.gates2022@gmail.com</Text>
        </View>
        <View style={{marginTop: 25, borderBottomWidth: 1, borderBottomColor: "lightgray"}}>
          <Text style={[styles.detailsLabel, { color: "deepskyblue"}]}>Name</Text>
          <Text style={styles.labelText}>Melinda Gates</Text>
        </View>
        <View style={{marginTop: 12, borderBottomWidth: 1, borderBottomColor: "lightgray"}}>
          <Text style={[styles.detailsLabel, { color: "deepskyblue"}]}>Nick Name</Text>
          <Text style={styles.labelText}>mel.gates</Text>
        </View>
        <View style={{marginTop: 12, borderBottomWidth: 1, borderBottomColor: "lightgray"}}>
          <Text style={[styles.detailsLabel, { color: "deepskyblue"}]}>Emergency Contact</Text>
          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <Text style={styles.labelText}>+233 789 456 123</Text>
            <FontAwesome name="phone-square" size={24} color="grey" />
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={{color: "white", fontSize: 20, fontWeight: "bold"}}>UPDATE PROFILE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  topNav: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "lightblue",
    paddingHorizontal: 16,
    marginTop: 20
  },

  topNavText: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 80,
    fontSize: 25,
    fontWeight: "bold"
  },

  picture: {
    flex: 3,
    alignItems: "center",
    position: "relative"
  },

  image: {
    resizeMode: "cover",
    height: 200,
    width: 200,
    borderRadius: 100,
    marginTop: 10,
  },

  imageIcon: {
    position: "absolute",
    backgroundColor: "deepskyblue", 
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50,
    borderRadius: 25,
    top: 110,
    right: 65
  },

  details: {
    flex: 6,
    paddingHorizontal: 40,
    marginTop: 60,
  },

  detailsLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "grey"
  },

  labelText: {
    fontSize: 20
  },

  button: {
    height: "15%", 
    width: "100%", 
    backgroundColor: "deepskyblue", 
    borderRadius: 50, 
    alignItems: "center",
    justifyContent: "center", 
    marginTop: 30,
  }
});

export default Profile;
