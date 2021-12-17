if (process.env.NODE_ENV === 'production') {
  import('./reportWebVitals')
    .then(({ reportWebVitals }) => reportWebVitals(console.log))
    .catch(({ message }) => console.error(message));
}
