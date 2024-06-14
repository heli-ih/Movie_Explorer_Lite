const fetchMovies = async () => {
  const url =
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTk1ZDM0ZmRhNDVlNjBhMDg4YmIzN2I5N2ZhYTY5YyIsInN1YiI6IjY2NmI2MjQ5NTJjZjg0MzAzYjc2MWJhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HW2fgJNNDPNVI8fRlpqFWaHwievFbhxCG1NuU2-k6pk',
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export {fetchMovies};
