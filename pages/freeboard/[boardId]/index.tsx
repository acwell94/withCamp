import FreeBoardDetailContainer from "../../../src/components/units/freeBoard/freeBoardDetail/FreeBoardDetail.container";
import { gql, request } from "graphql-request";
import Head from "next/head";

interface ISSR {
  fetchBoardData: {
    _id: string;
    writer: string;
    title: string;
    contents: string;
    youtubeUrl: string;
    likeCount: string;
    dislikeCount: string;
    images: string;
    createdAt: string;
    boardAddress: any;
  };
}

export default function FreeBoardDetailPage(props: ISSR) {
  return (
    <>
      <Head>
        <title>{`${props.fetchBoardData?.writer}님의 글`}</title>
        <meta property="og:title" content={props.fetchBoardData?.title} />
        <meta
          property="og:description"
          content={props.fetchBoardData?.contents}
        />
        <meta
          property="og:image"
          content={
            props.fetchBoardData?.images[0]
              ? props.fetchBoardData?.images[0]
              : `/images/campfire.jpg`
          }
        />
      </Head>
      <FreeBoardDetailContainer fetchBoardData={props.fetchBoardData} />;
    </>
  );
}

export const FETCH_BOARD: any = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      createdAt
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export const getServerSideProps = async (context: any) => {
  const result = await request(
    "https://backend06.codebootcamp.co.kr/graphql08",
    FETCH_BOARD,
    {
      boardId: context.query.boardId,
    }
  );

  if (!result) {
    return alert("sorry,,,");
  }

  return {
    props: {
      fetchBoardData: {
        _id: result.fetchBoard._id,
        writer: result.fetchBoard.writer,
        title: result.fetchBoard.title,
        contents: result.fetchBoard.contents,
        youtubeUrl: result.fetchBoard.youtubeUrl,
        likeCount: result.fetchBoard.likeCount,
        dislikeCount: result.fetchBoard.dislikeCount,
        images: result.fetchBoard.images,
        createdAt: result.fetchBoard.createdAt,
        boardAddress: result.fetchBoard.boardAddress,
      },
    },
  };
};
