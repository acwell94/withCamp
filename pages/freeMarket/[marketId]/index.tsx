import FreeMarketDetailContainer from "../../../src/components/units/freeMarket/freeMarketDetail/FreeMarketDetail.container";
import { gql, request } from "graphql-request";

interface ISSR {
  fetchUsedItemData: {
    _id: string;
    name: string;
    remarks: string;
    contents: string;
    price: number;
    tags: string;
    images: string;
    pickedCount: number;
    createdAt: string;
    seller: any;
    useditemAddress: any;
  };
}

export default function FreeMarketDetail(props: ISSR) {
  return (
    <FreeMarketDetailContainer fetchUsedItemData={props.fetchUsedItemData} />
  );
}

const FETCH_USED_ITEM: any = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      createdAt

      seller {
        _id
        email
        name
        createdAt
        updatedAt
      }
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export const getServerSideProps = async (context: any) => {
  const result = await request(
    "https://backend06.codebootcamp.co.kr/graphql",
    FETCH_USED_ITEM,

    {
      useditemId: context.query.marketId,
    }
  );

  if (!result) {
    return alert("sorry,,,");
  }

  return {
    props: {
      fetchUsedItemData: {
        _id: result.fetchUseditem._id,
        name: result.fetchUseditem.name,
        remarks: result.fetchUseditem.remarks,
        contents: result.fetchUseditem.contents,
        price: result.fetchUseditem.price,
        tags: result.fetchUseditem.tags,
        images: result.fetchUseditem.images,
        pickedCount: result.fetchUseditem.pickedCount || 0,
        createdAt: result.fetchUseditem.createdAt,
        seller: result.fetchUseditem.seller,
        useditemAddress: result.fetchUseditem.useditemAddress,
      },
    },
  };
};
