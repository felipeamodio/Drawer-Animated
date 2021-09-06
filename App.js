import React, {useState, useRef} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Animated } from 'react-native';

import home from './src/assets/home.png';
import search from './src/assets/search.png';
import notifications from './src/assets/bell.png';
import settings from './src/assets/settings.png';
import logout from './src/assets/logout.png';
import menu from './src/assets/menu.png';
import close from './src/assets/close.png';
import photo from './src/assets/photo.jpg'; 

export default function App() {
  const [currentTab, setCurrentTab] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);

  //animação

  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <Image source={require('./src/assets/profile.png')} style={styles.imgProfile} />
        <Text style={styles.txtProfile}>Jenna Stronks</Text>

        <TouchableOpacity>
          <Text style={styles.txtViewProfile}>Ver Perfil</Text>
        </TouchableOpacity>

        <View style={styles.btnView}>
         {TabButton(currentTab, setCurrentTab, "Home", home)}
         {TabButton(currentTab, setCurrentTab, "Search", search)}
         {TabButton(currentTab, setCurrentTab, "Notifications", notifications)}
         {TabButton(currentTab, setCurrentTab, "Settings", settings)}
        </View>

        <View>
          {TabButton(currentTab, setCurrentTab, "LogOut", logout)}
        </View>
      </View>

      <Animated.View style={styles.overLay}>

        <TouchableOpacity onPress={() => {
          Animated.timing(scaleValue, {
            toValue: showMenu ? 1 : 0.88,
            duration: 300,
            useNativeDriver: true
          })
          .start()

          setShowMenu(!showMenu)
        }}>
          <Image source={menu} style={styles.menuBtn} />
        
        </TouchableOpacity>

        <Text style={styles.textMenu}>{currentTab}</Text>

          <Image source={photo} style={styles.photoProfile} />
          <Text style={styles.nameProfile}>Jenna Stronks</Text>
          <Text style={styles.desc}>Desenvolvedor React Native</Text>
      </Animated.View>
    </SafeAreaView>
  );
}

const TabButton = (currentTab, setCurrentTab, title, image) => {
  return(
    <TouchableOpacity onPress={() => { 
      if(title == "LogOut"){
        // alert('teste')
      }else{
        setCurrentTab(title)
      }
      }}>
      <View style={[styles.tabBar, {backgroundColor: currentTab == title ? '#FFFFFF' : 'transparent'}]}>
        <Image source={image} style={[styles.homeImg, {tintColor: currentTab == title ? '#5359D1' : '#FFFFFF'}]} />
        <Text style={[styles.homeTxt, {color: currentTab == title ? '#5359D1' : '#FFFFFF'}]}>{title}</Text>
      </View>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5359D1',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  viewContainer: {
    justifyContent: 'flex-start',
    padding: 20
  },
  imgProfile: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginTop: 8
  },
  txtProfile: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 20
  },
  txtViewProfile: {
    marginTop: 6,
    color: '#FFFFFF'
  },
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingLeft: 13,
    paddingRight: 35,
    borderRadius: 8,
    marginTop: 15
  },
  homeImg: {
    width: 25,
    height: 25
  },
  homeTxt: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 15
  },
  btnView: {
    flexGrow: 1,
    marginTop: 50
  },
  overLay: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    paddingHorizontal: 15,
    paddingVertical: 20,
    transform: [
      {scale: scaleValue}
    ]
  },
  menuBtn: {
    height: 20,
    width: 20,
    tintColor: '#000000',
    marginTop: 40
  },
  textMenu: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    paddingTop: 20
  },
  photoProfile: {
    width: '100%',
    height: 300,
    borderRadius: 15,
    marginTop: 20
  },
  nameProfile: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 15,
    paddingBottom: 8
  },
  desc: {
    fontSize: 16
  }
});
