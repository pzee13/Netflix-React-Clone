import { useState, useEffect } from 'react';
import axios from '../../axios';
import { imageUrl, API_KEY } from '../../Constants/constants';
import './Movies.css';
import VideoModal from './Modal';

function Movies(props) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(props.url);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  function handleTrailer(id) {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
      if (response.data.results.length > 0) {
        setSelectedMovie(response.data.results[0].key);
      } else {
        console.log('Trailer not found for this movie');
      }
    });
  }

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className='row'>
      <h2 style={{color:props.color}}>{props.title}</h2>
      <div className='posters'>
        {movies.map((movie, index) => (
          <img onClick={() => handleTrailer(movie.id)} key={index} className='poster' src={`${imageUrl}${movie.backdrop_path}`} alt={movie.name} />
        ))}
      </div>
      {selectedMovie && <VideoModal videoId={selectedMovie} onClose={closeModal} />}
    </div>
  );
}

export default Movies;
