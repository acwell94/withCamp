# with:Camp

배포 URL : https://leminyoung.shop/

#### 목차

1. 실행 방법
2. 기술 스택
3. 페이지 구성

## 실행방법

localhost:3000에서
yarn install => graphql endpoint graphql08에서 graphql로 변경 => yarn dev

## 기술스택

![무제](https://user-images.githubusercontent.com/89783182/177761451-46bf1713-d5ed-46cf-8fbd-95a3ea97e11e.png)

## 페이지 구성

1. 메인페이지

![main](https://user-images.githubusercontent.com/89783182/177761556-3d566089-b78e-4115-a16f-dbed876ae2c1.gif)

> 자유게시판과 중고마켓(with:Shop)의 베스트 게시글을 볼 수 있습니다.
- 각각의 item 클릭시 상세보기로 이동이 가능합니다.

![main-butto-click](https://user-images.githubusercontent.com/89783182/177761826-424c8d28-a113-47fb-84c9-7fd557f282d7.gif)

> 소개페이지와 베스트게시글의 상세정보를 확인할 수 있습니다.
- 하단의 footre에서 개발자에게 연락할 수 있습니다.

2. 소개페이지

![Intro](https://user-images.githubusercontent.com/89783182/177762089-ad947533-69c9-4e99-81b5-9ce9758a1f6e.gif)

> 홈페이지의 소개페이지 입니다.

3. 회원가입

![singup](https://user-images.githubusercontent.com/89783182/177762130-cfa0c513-5a07-4cf1-b2ee-8bd2dd9d87a2.gif)

> 상단의 메뉴를 통해 회원가입을 할 수 있습니다.
- yup 적용으로 에러를 사전에 방지할 수 있습니다.

4. 로그인 & 로그아웃

![signin](https://user-images.githubusercontent.com/89783182/177762449-b4382ef6-9734-4c5c-bcc5-fa8d6a5e2531.gif)

> 로그인 페이지 입니다.

![signin-error and logout](https://user-images.githubusercontent.com/89783182/177762545-e9d3f075-b111-4943-8fec-1f7e33ae7e9e.gif)

> yup 적용으로 올바르지 않은 값을 입력하였을 경우 로그인이 되지 않습니다.

5. 자유게시판

![freeboardList](https://user-images.githubusercontent.com/89783182/177762722-3141aa0c-0326-49e5-91aa-585d57b81578.gif)

> 자유게시판 리스트 페이지입니다.
- 페이지네이션 적용으로 리스트 글을 확인할 수 있습니다.

![freeBoardSearch](https://user-images.githubusercontent.com/89783182/177762877-516016fc-735f-4325-95f1-08887360ab64.gif)

> 자유게시판 리스트에서 검색할 수 있습니다.
- 제목을 기준으로 검색해주세요.
- debouncing이 적용되었습니다. 검색 후 일정시간이 지나면 확인할 수 있습니다.

![freeboardDetail](https://user-images.githubusercontent.com/89783182/177762816-86903e43-9ed7-4a91-96a0-e4f26c4bf728.gif)

> 게시글 상세보기 페이지입니다.
- kakao-map이 적용되어 있습니다.
- react-player 적용으로 유튜브 영상이 재생 가능합니다.

![freeboardWrite](https://user-images.githubusercontent.com/89783182/177763111-3e4becfb-fa12-4deb-a269-9b07299a96f2.gif)

> 게시글 작성하기 페이지입니다.
- yup적용으로 올바르지 않은 값을 입력시 작성이 되지 않습니다.
- react-quill이 적용되어 있습니다. 내용 작성시 에디터로 작성이 가능합니다.
- kakao map 검색이 적용이 되었습니다. 원하는 위치를 지도에 표시할 수 있습니다.
- 이미지 업로드가 가능합니다. 이미지 파일이 아닌 파일은 업로드가 거절됩니다.
- react-player로 적용으로 유튜브 영상 링크를 첨부가 가능합니다.

![freeboradwrite edit, editerror, delete](https://user-images.githubusercontent.com/89783182/177763542-3d1837dd-4c73-4eef-9fae-655ddecd219c.gif)

> 게시글 수정하기 페이지입니다.
- yup적용으로 올바르지 않은 값을 입력시 수정이 되지 않습니다.
- 비밀번호가 다를 시 수정이 되지 않습니다.
- 게시글 작성하기와 동일한 페이지로 수정하기 버튼을 눌렀을 경우 나타납니다.
- 게시글 삭제가 가능합니다.

![freeboardComment write, delete, rating, like, dislike](https://user-images.githubusercontent.com/89783182/177763751-129b6171-8fd1-4242-a762-5a76651ab7ef.gif)

> 게시글에 댓글을 달 수 있습니다.
- 게시글 하단에서 댓글을 달 수 있습니다. 마찬가지로 yup이 적용되어 있습니다.
- 별점을 줄 수 있습니다.
- 댓글 삭제가 가능합니다. 댓글 작성 시 입력한 비밀번호를 입력해 주세요.
- 게시글에 좋아요와 싫어요를 표시할 수 있습니다. 중복이 되기 때문에 한 사람이 여러번 누를 수 있습니다.

6. 중고마켓(with:Shop)

![marketList](https://user-images.githubusercontent.com/89783182/177764067-70a09b92-e0eb-4425-a47c-b05007291f2c.gif)

> 중고마켓 게시글 리스트입니다.
- 무한스크롤이 적용되어 있어 스크롤을 하단으로 내릴 시 이전 게시글들을 불러옵니다.

![marketSearch](https://user-images.githubusercontent.com/89783182/177764957-f5e98832-6aed-45dc-9670-0aa755bb2eea.gif)

> 중고마켓 게시글 리스트를 검색할 수 있습니다.
- 상품명을 기준으로 검색할 수 있습니다.
- debouncing이 적용되어 있습니다.

![marketDetail](https://user-images.githubusercontent.com/89783182/177764244-79b52d2b-6e45-4650-979b-853453fcfd29.gif)

> 중고마켓 게시글 상세보기입니다.
- 게시글 리스트에서 각각의 카드를 클릭할 시 상세보기로 넘어갑니다.
- kakao-map이 적용되어 있습니다.
- 작성자와 로그인한 유저가 다를 경우 일부버튼이 보이지 않습니다.
- 작성자와 로그인한 유저가 같을 경우 찜하기, 구매하기 버튼이 활성화 되지 않습니다.

![marketWrite](https://user-images.githubusercontent.com/89783182/177764513-1226aa51-24eb-4626-a704-e82f071f7235.gif)

> 중고마켓 게시글 작성페이지 입니다.
- yup적용으로 올바르지 않은 값을 입력시 작성이 되지 않습니다.
- react-quill이 적용되어 있습니다. 내용 작성시 에디터로 작성이 가능합니다.
- kakao-map 검색기능이 제공 됩니다. 원하는 위치를 지도에 표시할 수 있습니다.
- 이미지 업로드가 가능합니다.

![marketWriteEdit](https://user-images.githubusercontent.com/89783182/177764729-f53a7b8d-44da-4ad7-b55e-6408a1964954.gif)

> 중고마켓 게시글 수정페이지 입니다.
- yup적용으로 올바르지 않은 값을 입력시 수정이 되지 않습니다.
- 작성자와 다른 아이디로 로그인 시 상세보기 페이지에서 수정하기 버튼이 나오지 않습니다.

![marketComment, answer](https://user-images.githubusercontent.com/89783182/177765335-43f0b53c-79e4-4515-af8d-9fdd01d40eb8.gif)

> 중고마켓 게시글에 댓글을 달 수 있습니다.
- 상세보기 페이지에서 댓글을 작성할 수 있고 대댓글 작성이 가능합니다.

![marketComment Edit, delete](https://user-images.githubusercontent.com/89783182/177765520-e498e72b-cd3d-4a41-897a-40fc0a865d55.gif)

> 댓글을 수정할 수 있습니다.

![marketComment another id](https://user-images.githubusercontent.com/89783182/177765566-70e5d6aa-772f-46ab-bc8f-d3231f134164.gif)

> 댓글작성자와 로그인한 유저가 같을경우에만 수정, 삭제 버튼이 보여집니다.

![marketPay, Like](https://user-images.githubusercontent.com/89783182/177765605-390ccffd-8b1b-4e35-8c27-039b015b289c.gif)

> 중고마켓의 게시글을 구매할 수 있습니다.
- 포인트 충전을 하고 구매를 할 수 있습니다.
- 포인트 부족시 충전페이지로 넘어갑니다.
- 결제 완료후 마이페이지에서 결제내역을 확인할 수 있습니다.
- 게시글을 찜할 수 있습니다. 내가 찜한 리스트는 마이페이지에서 확인이 가능합니다.

7. 마이페이지

![myPage pointCharge](https://user-images.githubusercontent.com/89783182/177765824-0cd95cbb-7690-4993-a382-ca6550de2662.gif)

> 포인트 충전
- import 적용으로 포인트를 구매할 수 있습니다.

![myPage](https://user-images.githubusercontent.com/89783182/177765970-079ea895-6b0e-4217-b8ab-1416f41ae295.gif)

> 마이페이지에서 유저 정보를 확인할 수 있습니다.
- 찜목록, 판매내역, 구매내역, 포인트 충전내역, 잔여포인트 등을 확인할 수 있습니다.
- 각각은 페이지네이션으로 구현하였습니다.

8. 반응형

![responsive](https://user-images.githubusercontent.com/89783182/177766178-d63020c0-96e2-499f-8235-e2147668e722.gif)

> 반응형 적용이 완료되었습니다.
- 1023px, 768px, 360px 등 다양한 환경에서 만나볼 수 있습니다.
