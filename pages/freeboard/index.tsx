import Head from "next/head";
import FreeBoardListContainer from "../../src/components/units/freeBoard/freeBoardList/FreeBoardList.container";

function FreeBoardListPage() {
  return (
    <>
      <Head>
        <title>자유게시판</title>
        <meta property="og:title" content="with:Camp" />
        <meta property="og:description" content="같이 그리고 가치 있는 캠핑" />
        <meta property="og:image" content={`/images/withCamp.png`} />
      </Head>
      <FreeBoardListContainer />
    </>
  );
}

export default FreeBoardListPage;
