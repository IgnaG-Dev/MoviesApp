import React from 'react';
import {View} from 'react-native';
import {useMovies} from '../../hooks/useMovies';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PosterCarrousel} from '../../components/movies/PosterCarrousel';
import {HorizontalCarrousel} from '../../components/movies/HorizontalCarrousel';
import {FullScreenLoader} from '../../components/loaders/FullScreenLoader';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage} =
    useMovies();

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        {/* Principal */}
        <PosterCarrousel movies={nowPlaying} />

        {/* Populares */}
        <HorizontalCarrousel
          movies={popular}
          title="Populares"
          loadNextPage={popularNextPage}
        />

        {/* Top Rated */}
        <HorizontalCarrousel movies={topRated} title="Mejor calificadas" />

        {/* Próximamente */}
        <HorizontalCarrousel movies={upcoming} title="Próximamente" />
      </View>
    </ScrollView>
  );
};
