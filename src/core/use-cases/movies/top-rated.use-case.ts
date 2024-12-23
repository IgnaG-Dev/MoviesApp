import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieMapper} from '../../../infrastructure/interfaces/mappers/movie.mapper';
import { MovieDBMoviesResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import type {Movie} from '../../entities/movie.entity';

export const moviesTopRatedUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const topRated = await fetcher.get<MovieDBMoviesResponse>('/top_rated');

    return topRated.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies - TopRatedUseCase');
  }
};
