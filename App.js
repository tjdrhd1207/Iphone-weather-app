// StatusBar는 react-native가 import하는 것이 아닌 third-party-package
// ios 운영체제와 소통하기 위한 기능
// expo 팀에서 만든 third-party API, Components을 제공하고 있음 (react-native에서 제공하지 않는 다양한 기능)
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image, Dimensions } from 'react-native';

const RAINY = require('./assets/rainy-icon.png');
const CLOUD_WITH_MOON = require('./assets/cloud-with-moon-icon.png');
const MOON = require('./assets/moon-icon.png');

const WEATHER_DATA = [
  {
    title: '예상 날씨',
    data: [
      { time: '지금', icon: RAINY, temperature: 20 },
      { time: '오후 8시', icon: RAINY, temperature: 19 },
      { time: '오후 9시', icon: RAINY, temperature: 19 },
      { time: '오후 10시', icon: CLOUD_WITH_MOON, temperature: 19 },
      { time: '오후 11시', icon: CLOUD_WITH_MOON, temperature: 19 },
      { time: '오전 12시', icon: MOON, temperature: 19 },
    ]
  }
];

export default function App() {
  const weatherData = WEATHER_DATA[0]?.data || [];

  return (
    <View style={CommonStyles.container}>
      <ImageBackground source={require('./assets/cloud.jpg')} style={CommonStyles.backgroundImage}>
        <View style={firstContainer.firstContainer}>
          <Text style={firstContainer.HeaderText}>나의 위치</Text>
          <Text style={firstContainer.Header2Text}>서울 특별시</Text>
          <View style={firstContainer.temperatureContainer}>
            <Text style={firstContainer.temperature}>20</Text>
            <Text style={firstContainer.temperatureSign}>&#176;</Text>
          </View>
          <Text style={firstContainer.status}>부분적으로 흐림</Text>
          <Text style={firstContainer.status}>최고:24&#176; 최저: 20&#176;</Text>
        </View>

        <View style={SecondContainer.container}>
          <Text style={SecondContainer.info}>오후 9시쯤 청량한 상태가 예상됩니다.</Text>
          <View style={SecondContainer.line} />
          <ScrollView 
            style={SecondContainer.scrollView}
            contentContainerStyle={SecondContainer.scrollViewContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false} // 수평 스크롤바 보이기
            >
            {weatherData.length > 0 ? (
              weatherData.map((item, index) => (
                <View key={index} style={SecondContainer.item}>
                  <Text style={SecondContainer.itemStyle}>{item.time}</Text>
                  <Image source={item.icon} style={SecondContainer.icon}></Image>
                  <Text style={SecondContainer.itemStyle}>{item.temperature}&#176;</Text>
                </View>
              ))
            ) : (
              <Text>
                날씨정보가 없습니다.
              </Text>
            )}
          </ScrollView>
        </View>
      </ImageBackground>
      <StatusBar style="light" />
    </View>
  );
}

// StyleSheet를 쓰는이유는?
// 1. 자동완성기능 제공
// 2. style component를 정리하는데 유용함 ( 각 태그에 style attibute를 긴줄로 정의할 필요가 x )
const CommonStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const firstContainer = StyleSheet.create({
  firstContainer: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  temperatureContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  HeaderText: {
    fontSize: '45',
    color: 'white',
  },
  Header2Text: {
    fontSize: '13',
    color: 'white',
    fontWeight: 'bold'
  },
  temperature: {
    fontSize: '100',
    color: 'white',
    fontWeight: '100',
  },
  status: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  },
  temperatureSign: {
    fontSize: 20,
    color: 'white',
  }
})

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const SecondContainer = StyleSheet.create({
  container: {
    backgroundColor: '#cac1bf',
    opacity: 0.7,
    borderRadius: 5,
    marginTop: 50,
    height: 120,
    width: screenWidth - 50,
    alignItems: 'center'
  },
  info: {
    fontSize: 15,
    color: 'white',
  },
  line: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginVertical: 5, // 위 아래 여백
    width: '100%',
  },
  scrollView: {
    height: 30,
    overflow: 'hidden',
  },
  scrollViewContent: {
    flexDirection: 'row',
  },
  item: {
    width: 80,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  itemStyle: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 10,
  }
})