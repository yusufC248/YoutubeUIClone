import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  SectionList,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <View backgroundColor="black" style={{flex: 1}}>
      <View backgroundColor="#2B2B2B" flexDirection="row" alignItems="center">
        <Icon name="youtube" size={50} color="red" style={{marginLeft: 10}} />
        <Text
          style={{
            color: 'white',
            fontSize: 25,
            fontWeight: 'bold',
            marginLeft: 10,
          }}>
          YouTube
        </Text>
        <Icon
          name="videocamera"
          color="white"
          size={35}
          style={{marginLeft: 130}}
        />
        <Icon name="search1" color="white" size={35} style={{marginLeft: 20}} />
        <Image
          source={require('.//image/profile.png')}
          style={{width: 50, height: 50, borderRadius: 25, marginLeft: 20}}
        />
      </View>
      <SafeAreaView style={{flex: 1}}>
        <SectionList
          sections={SECTIONS}
          stickySectionHeadersEnabled={false}
          renderItem={({item, sections}) => {
            return <OnTheList item={item} />;
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const OnTheList = ({item}) => {
  return (
    <View>
      <View>
        <Image
          source={{
            uri: item.gambar,
          }}
          style={stylesa.Gambar}
        />
        <View style={{flexDirection: 'row', alignItems: 'stretch'}}>
          <Image
            source={{
              uri: item.profile,
            }}
            style={stylesa.Profile}
          />
          <View style={{flexDirection: 'column'}}>
            <Text style={stylesa.Judul}>{item.judul}</Text>
            <Text style={{color: 'white', marginLeft: 10}}>{item.view}</Text>
            <Text style={{color: 'white', marginLeft: 10, marginBottom: 20}}>
              {item.time}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const SECTIONS = [
  {
    title: 'Made for you',
    data: [
      {
        key: '1',
        gambar: 'https://i.ibb.co/mDCb5J5/satu.jpg',
        judul: "ROSE - 'On The Ground' M/V",
        profile: 'https://i.ibb.co/YRStTB7/profile-Channel.jpg',
        view: 'BLACKPINK . 207m views',
        time: '9 months ago',
      },
      {
        key: '2',
        gambar: 'https://i.ibb.co/xY5Pxj3/dhua.jpg',
        judul:
          "BLACKPINK X Selena Gomez - 'Ice Cream' DANCE PERFORMANCE VIDEO (in ZEPETO)",
        profile: 'https://i.ibb.co/YRStTB7/profile-Channel.jpg',
        view: 'BLACKPINK . 118m views',
        time: '11 months ago',
      },
      {
        key: '3',
        gambar: 'https://i.ibb.co/SNnP4z4/tiga.jpg',
        judul:
          "BLACKPINK - 'SOLO' + '뚜두뚜두(DDU-DU DDU-DU)' + 'FOREVER YOUNG' in 2018 SBS Gayodaejun",
        profile: 'https://i.ibb.co/YRStTB7/profile-Channel.jpg',
        view: 'BLACKPINK . 269m views',
        time: '2 years ago',
      },
      {
        key: '4',
        gambar: 'http://i3.ytimg.com/vi/4TWR90KJl84/maxresdefault.jpg',
        judul: "aespa 에스파 'Next Level' MV",
        profile: 'https://i.ibb.co/20rfsJ4/sm.jpg',
        view: 'SMTOWN . 134m views',
        time: '2 months ago',
      },
      {
        key: '5',
        gambar: 'http://i3.ytimg.com/vi/ZeerrnuLi5E/maxresdefault.jpg',
        judul: "aespa 에스파 'Black Mamba' MV",
        profile: 'https://i.ibb.co/20rfsJ4/sm.jpg',
        view: 'SMTOWN . 168m views',
        time: '8 months ago',
      },
      {
        key: '6',
        gambar: 'http://i3.ytimg.com/vi/K9_VFxzCuQ0/maxresdefault.jpg',
        judul: "ROSÉ - 'Gone' M/V",
        profile: 'https://i.ibb.co/YRStTB7/profile-Channel.jpg',
        view: 'BLACKPINK . 112m views',
        time: '4 months ago',
      },
    ],
  },
];
const stylesa = StyleSheet.create({
  Text: {
    fontSize: 28,
    marginTop: 15,
    color: 'black',
    marginStart: 15,
  },
  Gambar: {
    width: 480,
    height: 250,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 20,
  },
  Tulisan: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'white',
  },
  Search: {
    alignSelf: 'center',
    width: 400,
    height: 60,
    borderWidth: 2,
    backgroundColor: 'white',
    borderColor: 'black',
    marginBottom: 30,
    borderRadius: 25,
    fontSize: 18,
    fontStyle: 'normal',
  },
  Profile: {
    height: 60,
    width: 60,
    borderRadius: 25,
    marginBottom: 15,
    marginLeft: 8,
  },
  Judul: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
    marginEnd: 5,
    maxWidth: 400,
  },
});

export default App;
