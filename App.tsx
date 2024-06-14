/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Divider} from 'react-native-paper';
import {fetchMovies} from './data';
import Carousel from 'react-native-snap-carousel';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

const _renderItem = ({item, index}) => {
  return (
    <View style={styles.slide} key={index}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: '#222020',
  };

  const isCarousel = React.useRef(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data);
      } catch (error) {
        console.error('Error setting movies:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* Top Nav  */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 27,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {/* Profile  */}
            <TouchableOpacity
              style={{
                backgroundColor: '#73B0EE',
                padding: 10,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: 'white',
              }}>
              <Image
                source={require('./assets/user.png')}
                style={{
                  width: 25,
                  height: 25,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            {/* Welcome  */}
            <View>
              <Text style={{fontSize: 13, paddingLeft: 9, color: 'white'}}>
                Welcome Back,
              </Text>
              <Text style={{fontWeight: '800', paddingLeft: 9, color: 'white'}}>
                Jane
              </Text>
            </View>
            <View></View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: 40,
            }}>
            <Image
              source={require('./assets/magnifiying-glass.png')}
              style={{
                width: 17,
                height: 17,
              }}
              resizeMode="contain"
            />
            <Image
              source={require('./assets/notification-bell-outline-interface-symbol.png')}
              style={{
                width: 17,
                height: 17,
              }}
              resizeMode="contain"
            />
          </View>
        </View>
        <Divider
          style={{
            backgroundColor: 'white',
            marginTop: 13,
            marginBottom: 47,
            marginHorizontal: 21,
            height: 2,
          }}
        />
        {/* Carousel  */}
        <Carousel
          layout={'default'}
          data={movies}
          renderItem={_renderItem}
          sliderWidth={300}
          itemWidth={250}
        />
        {/* Content  */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  slide: {
    width: 200,
    height: 200,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
});

export default App;
