import "../styles/styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
    
        <link rel="icon" href="book.svg" type="image/svg+xml" />
      </head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
