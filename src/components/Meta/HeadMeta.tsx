import Head from 'next/head';

const HeadMeta = () => {
  return (
    <Head>
      <title>제주력테스트</title>
      <meta
        property="og:description"
        content="제주 퀴즈 100점에 도전해보세요"
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content="제주력테스트" />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://monumental-madeleine-10eb3f.netlify.app"
      />
      <meta
        property="og:image"
        content="https://kr.object.ncloudstorage.com/jejupower/og/ogImg.png"
      />
      <meta property="og:article:author" content="제주력테스트" />
      <link rel="icon" href="/assets/images/favicon_96px.png" />
    </Head>
  );
};

export default HeadMeta;
