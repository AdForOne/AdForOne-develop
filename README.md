# ADFO

![Logo](https://user-images.githubusercontent.com/72030487/219264765-adae20c3-5a2c-4cb8-ab27-983c703cac26.png)

**배포주소 :** [**https://adfo2.shop**](https://adfo2.shop)

---

## ⭐️ 기획의도

**SNS마케팅이 필요한 두 이용자를 위한 서비스입니다**
광고를 받을 `인플루언서`,`크리에이터`,`파워블로거`와 광고를 의뢰하는 `광고주`

이들을 보다 쉽게 연결해주는 서비스가 있으면 좋겠다고 생각했습니다.
기존에 사용하던 기술 스택과 학습하고 싶었던 기술스택을 사용해 볼 좋은 기회라고 생각해 이 프로젝트를 진행하게 되었습니다.

`프로젝트의 목표는 상용화가 아닌 학습용입니다.`

---

## ⭐️ 팀원

### 김민승

|   Email   |   Blog    |          Git-Hub           |
| :-------: | :-------: | :------------------------: |
| 추가바람! | 추가바람! | https://github.com/KMS9612 |

**작업 내용**

- 마이페이지(Edit, Influence) 마크업
- 마이페이지 `CRUD`
- `Firebase`를 통한 로그인 및 회원가입 기능개발
- 레이아웃 (Header, Footer) 작업

---

### 이재홍

|        Email        |           Blog            |             Git-Hub             |
| :-----------------: | :-----------------------: | :-----------------------------: |
| keash8091@gmail.com | https://velog.io/@dlwoxhd | https://github.com/Jae-hong-lee |

**작업내용** :

- `main page` 및 `list page` 마크
- **채팅기능** 및 디자인
- 회원가입및 로그인 페이지 **유효성검사**추가
- AWS를 활용한 **SSR Only 배포**
- `firebase`를 이용한 사용자 **검색기능 구현**

---

## ⭐️ 사용스택

- **React**
  - SPA프레임워크인 React를 활용해 컴포넌트의 재사용성에 대해 생각하며 제작했습니다.
- **Next**
  - SSR을 위해 Next.js를 사용
- **TypeScript**
  - JavaScript의 유동적인 Type으로인해 생기는 문제를 사전에 방지하기 위해 TypeScript의 Interface를 활용해 Props타입, 객체 타입을 지정했습니다.
- **Emotion(Styled-Component)**
  - 가독성 좋은 마크업을 위해 Emotion-Styled를 사용 했습니다.
- **FireBase**
  - 백엔드 팀원의 부재로 Serverless 구조의 사이트를 위하여 Firebase를 사용 했습니다.
- **Material-UI**
  - 컴포넌트,스타일의 일관화를 위해 MUI 디자인 라이브러리를 사용했습니다.
- **ESlint , Prettier**
  - 2인이지만 코드의 통일성을 위해 ESLint 기본 규칙을 따라 Prettier를 적용해 협업을 진행 했습니다.
- **AWS**
  - EC2, Route53, CloudFront, Load Balance를 이용해 SSR Only배포를 진행 하엿습니다.
- **Git, GitHub**
  - 코드관리를 위해 Git,Github를 이용해 WorkFlow를 정립했습니다.
- **Docker, Docker-Compose**
  - 인스턴스 내의 배포를 위해 Docker와 Docker-Compose를 사용했습니다.

---

## ⭐️ 페이지구성(시연영상)

`회원가입과 마이페이지는 인플루언서와 광고주로 나누어 페이지를 제작하였습니다.`

### 로그인페이지

![Loginpage](https://user-images.githubusercontent.com/72030487/219271723-682cf51d-259e-4f75-b7a9-d45a51e8d799.gif)

### 회원가입페이지

![Signinpage](https://user-images.githubusercontent.com/72030487/219271750-2fb56160-7a39-4a74-9a50-8080f1139ef1.gif)

### 마이페이지

![UpdateProfile](https://user-images.githubusercontent.com/72030487/219272086-87faee94-5ca7-43c9-8a14-207e9df96f64.gif)
![UpdateProfileIMG](https://user-images.githubusercontent.com/72030487/219272186-72dd2238-3d43-40db-8373-a88323f5d437.gif)

#### 메인페이지

![mainpage](https://user-images.githubusercontent.com/72030487/219272041-209fabe7-8753-4a1b-8b83-5a626951f4f2.gif)

### 채팅페이지

![chatting](https://user-images.githubusercontent.com/72030487/219272061-aee8eb9c-ff18-4a28-938c-06cc1583fa13.gif)

### 리스트 페이지 (검색)

![Search](https://user-images.githubusercontent.com/72030487/219272073-225e46ef-3ab2-463d-af2b-525dfb64d123.gif)

---

## ⭐️ Git Work Flow

### `GitHub Issue`

TaskNumber를 받아 해당 TaskNumber위주의 규칙을 만들었다.
GitHub Project로 To do, In Progress, done

### `Branch`

TaskNumber-feature로 통일

### `Commit-Message`

`#TaskNumber-(Style,Feat,Fix)/issue` 네이밍과 비슷하게 작성.
**Style** = 마크업, 디자인에 관련된 수정,제작을 할 때 사용된다,
**Feat** = 자바(타입)스크립트와 같이 기능적 수정,제작을 할 때 사용된다,
**Fix** = 버그,에러등 문제점을 발견하여 수정이 필요할때 사용된다.

### `Push,Pull`

깃허브 repo가 현재 2개가 있다, **organizations에 있는 원본**과 그 **원본을 fork한 개인 repo**가 있다.
그 둘을 내 local파일에 remote등록은 해준다, 원본은 master, 개인은 develop.
그리고 매번 TaskNumber에 맞는 Branch를 생성해 작업을 하고 develop에 push를 한 후 개인 repo에서
원본repo로 PR(Pull Request)를 날리고 원본 develop브랜치에 머지한다.
그렇게 매일 저녁 머지한 내용을 팀원의 local develop브랜치로 pull을 받은 후 develop브랜치에서 또 새로운 브랜치를 만들어 작업을 한다.
