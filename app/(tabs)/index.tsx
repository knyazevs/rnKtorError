import {Image, StyleSheet, Platform, FlatList} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {useEffect, useState} from "react";
import {knyazevs} from "ktor-nodejs";

type Movie = {
    id: string;
    title: string;
    releaseYear: string;
};


export default function HomeScreen() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<Movie[]>([]);

    const getMovies = async () => {
        try {
            const result = await knyazevs.get("https://reactnative.dev/movies.json")
            console.log(result);
            const response = await fetch('https://reactnative.dev/movies.json');
            const json = await response.json();
            setData(json.movies);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);


    return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hello world!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Ktor test</ThemedText>
          <FlatList
              data={data}
              keyExtractor={({id}) => id}
              renderItem={({item}) => (
                  <ThemedText>
                      {item.title}, {item.releaseYear}
                  </ThemedText>
              )}
          />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
