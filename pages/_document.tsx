import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="These are the Ai Generated Arts by Noman Dhoni"
          />
          <meta
            property="og:site_name"
            content="artsbynomandhoni.netlify.app"
          />
          <meta
            property="og:description"
            content="These are the Ai Generated Arts by Noman Dhoni"
          />
          <meta
            property="og:title"
            content="These are the Ai Generated Arts by Noman Dhoni"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="These are the Ai Generated Arts by Noman Dhoni"
          />
          <meta
            name="twitter:description"
            content="These are the Ai Generated Arts by Noman Dhoni"
          />
          <meta
            name="keywords"
            content="Noman Dhoni, noman dhoni, nomandhoni, Noman Dhoni Art, Noman Dhoni AI Art, AI Generated Art by Noman Dhoni, Noman Dhoni Digital Art, Noman Dhoni Artwork, Art by Noman Dhoni, Noman Dhoni Artist, Noman Dhoni Art Gallery, Noman Dhoni Art Collection, Noman Dhoni Original Art, Nomandhoni Art, Nomandhoni AI Art, Noman Dhoni Creative Art, Noman Dhoni Art Exhibitions, Noman Dhoni Art Events, Noman Dhoni Art Reviews, Noman Dhoni Art Sales, Noman Dhoni Art News, Noman Dhoni Art Techniques, Noman Dhoni Art Inspirations"
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
