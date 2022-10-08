import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

//import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomDrawer = props => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#351401" }}
      >
        <ImageBackground
          source={{
            uri: "https://scontent.famm7-1.fna.fbcdn.net/v/t39.30808-1/309547901_3378622602407526_5199820529512599367_n.jpg?stp=dst-jpg_p160x160&_nc_cat=102&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=0bEseZVn3WoAX9oUTDa&_nc_ht=scontent.famm7-1.fna&oh=00_AT_enPcvH_oVXNnp7L6N8vUjxfC2rIjIxu6kZDfdu5M6MQ&oe=6345946D",
          }}
          style={{ padding: 20 }}
        >
          <Image
            source={{
              uri: "https://yt3.ggpht.com/yti/AJo0G0mZUR14-opFB6qmNjKulZDmVp12bQ36E1xzGveZJQ=s88-c-k-c0x00ffffff-no-rj-mo",
            }}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              
              marginBottom: 5,
            }}
          >
            Mo Samdi
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "#fff",
               // fontFamily: "Roboto-Regular",
                marginRight: 5,
              }}
            >
              280 Friends
            </Text>
            <Ionicons name="person" size={14} color="#fff" />
          </View>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                
                marginLeft: 5,
              }}
            >
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                
                marginLeft: 5,
              }}
            >
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;