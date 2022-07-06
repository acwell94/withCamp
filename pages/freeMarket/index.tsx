import Head from "next/head";
import FreeMarketListContainer from "../../src/components/units/freeMarket/freeMarketList/FreeMarketList.container";

function FreeMarketListPage() {
  return (
    <>
      <Head>
        <title>with:Shop</title>
        <meta property="og:title" content="with:Camp" />
        <meta
          property="og:description"
          content="with:Shop에 오신 것을 환영합니다."
        />
        <meta property="og:image" content={`/images/withCamp.png`} />
      </Head>
      <FreeMarketListContainer />
    </>
  );
}

export default FreeMarketListPage;
