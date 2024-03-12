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
