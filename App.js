import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <View backgroundColor="black" style={{flex: 1}}>
      <View backgroundColor="#082032" flexDirection="row" alignItems="center">
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
      <ScrollView>
        <View>
          <Image source={require('.//image/satu.jpg')} style={stylesa.Gambar} />
          <View style={{flexDirection: 'row', alignItems: 'stretch'}}>
            <Image
              source={require('.//image/profileChannel.jpg')}
              style={stylesa.Profile}
            />
            <View style={{flexDirection: 'column'}}>
              <Text style={stylesa.Judul}>ROSE - 'On The Ground' M/V</Text>
              <Text style={{color: 'white', marginLeft: 10}}>
                BLACKPINK . 207m views
              </Text>
              <Text style={{color: 'white', marginLeft: 10, marginBottom: 20}}>
                9 months ago
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Image
            source={require('.//image/dhua.jpeg')}
            style={stylesa.Gambar}
          />
          <View style={{flexDirection: 'row', alignItems: 'stretch'}}>
            <Image
              source={require('.//image/profileChannel.jpg')}
              style={stylesa.Profile}
            />
            <View style={{flexDirection: 'column'}}>
              <Text style={stylesa.Judul}>
                BLACKPINK X SELENA GOMEZ - ' Ice Cream'
              </Text>
              <Text style={{color: 'white', marginLeft: 10}}>
                BLACKPINK . 207m views
              </Text>
              <Text style={{color: 'white', marginLeft: 10, marginBottom: 20}}>
                9 months ago
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Image
            source={require('.//image/tiga.jpeg')}
            style={stylesa.Gambar}
          />
          <View style={{flexDirection: 'row', alignItems: 'stretch'}}>
            <Image
              source={require('.//image/profileChannel.jpg')}
              style={stylesa.Profile}
            />
            <View style={{flexDirection: 'column'}}>
              <Text style={stylesa.Judul}>
                BLACKPINK - DDDU DDUU Dance Perform
              </Text>
              <Text style={{color: 'white', marginLeft: 10}}>
                BLACKPINK . 207m views
              </Text>
              <Text style={{color: 'white', marginLeft: 10, marginBottom: 20}}>
                9 months ago
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Image
            source={require('.//image/empat.jpeg')}
            style={stylesa.Gambar}
          />
          <View style={{flexDirection: 'row', alignItems: 'stretch'}}>
            <Image
              source={require('.//image/profileChannel.jpg')}
              style={stylesa.Profile}
            />
            <View style={{flexDirection: 'column'}}>
              <Text style={stylesa.Judul}>BLACKPINK - 'Pretty Savage'</Text>
              <Text style={{color: 'white', marginLeft: 10}}>
                BLACKPINK . 207m views
              </Text>
              <Text style={{color: 'white', marginLeft: 10, marginBottom: 20}}>
                9 months ago
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

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
  },
  Judul: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
    marginEnd: 5,
  },
});

export default App;
