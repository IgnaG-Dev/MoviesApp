import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {FullMovie} from '../../../core/entities/movie.entity';
import {formatter} from '../../../config/helpers/formatter';
import {Cast} from '../../../core/entities/cast.entity';
import {FlatList} from 'react-native-gesture-handler';
import {CastActor} from '../cast/CastActor';

interface Props {
  movie: FullMovie;
  cast: Cast[];
}

export const MovieDetails = ({movie, cast}: Props) => {
  return (
    <>
      <View style={styles.container}>
        {/* Rating and Genres */}
        <View style={styles.row}>
          <Text style={styles.rating}>⭐ {movie.rating}</Text>
          <Text style={styles.genres}>- {movie.genres.join(', ')}</Text>
        </View>

        {/* Story Section */}
        <Text style={styles.sectionTitle}>Historia</Text>
        <Text style={styles.description}>{movie.description}</Text>

        {/* Budget Section */}
        <Text style={styles.sectionTitle}>Presupuesto</Text>
        <Text style={styles.budget}>{formatter.currency(movie.budget)}</Text>
      </View>

      {/* Casting Section */}
      <View style={styles.castingContainer}>
        <Text style={styles.castTitle}>Actores</Text>

        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <CastActor actor={item} />}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffcc00', // Example color for rating
  },
  genres: {
    marginLeft: 5,
    fontSize: 16,
    color: '#555',
  },
  sectionTitle: {
    fontSize: 23,
    marginVertical: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 18,
    lineHeight: 25,
    color: '#444',
    marginTop: 10,
  },
  budget: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    marginTop: 5,
  },
  castingContainer: {
    marginVertical: 20,
  },
  castTitle: {
    fontSize: 23,
    marginVertical: 10,
    marginHorizontal: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
