# User

- ID
- 닉네임
- 비밀번호
- 이메일
- (프로필 사진)
- (Organization) - Nullable / 1개의 조직에만 소속 가능???



## Password

> 보안을 위해 비밀번호를 따로 관리도 가능

- User ID
- salt
- stretching
- 비밀번호
  - renewed (메일로 임시 비밀번호를 보내 비밀번호 초기화 후 변경을 강제할 때 필요)



## Organization (?)

- ID
- 소속명
- organization code



### 인증번호

- Redis로 관리



## 약관 (?)

- 약관 코드
- 약관 내용



## 동의한 약관 (Mapping)

- User ID
- 약관 코드



# Question

- ID
- 제목
- 출처
- 질문유형
- 답변완료여부
- 코
- 질문내용
- 생성시간
- 수정시간



## Question Count

- Question ID
- 조회수
- 좋아요수
- 댓글수



## Question 즐겨찾기 (Mapping)

- User ID
- Question ID



# Tag

- ID
- 태그명 (알고리즘 타입)



## Question Tag (Mapping)

- ID
- Question ID
- Tag ID



# Answer

- ID
- User ID
- 답변내용
- 생성시간
- 수정시간



## Answer Count

- Answer ID
- 좋아요 수



# Comment

- ID
- Question ID
- User ID

- 내용
- 생성시간
- 수정시간



## Comment Count

- Comment ID
- 좋아요 수



# Notification

>  Push 방식의 실시간 알림 기능의 경우 조금 까다로울 수 있음 (Pull 방식은 간단)
>
> 상세 알림은 내 뇌피셜로 구현
>
> 정기적으로 제거 필요할 듯 (횟수 제한 or 시간 제한)

```
[고민할 거리]
1. 알림을 발생시킨 상대가 닉네임을 변경한다면?
-> 내용을 찾아서 수정하는 건 말이 안 됨
-> Target User ID를 따로 뺀다면 알림에 Target User 컬럼을 따로 부여할 정도로 알림 발생은 인터렉션이 발생할 때만 생기는지 고민해봐야함
(가장 인기있는 글에 선정되거나, 이벤트에 당첨된다면?)
-> 발생한 알림은 절대 수정되지 않는 걸로?
2. 알림을 발생시킨 댓글이 삭제된다면?
-> 이건 그냥 냅두는 게 맞는듯
3. 좋아요, 팔로우를 여러 사람이 동시에 한다면?
-> 알림을 개별 유저의 좋아요(ㅇㅇㅇ님이 게시물을 좋아합니다)로 도배해야하는지?
-> 아니면 알림내용을 "oo명이 게시글을 좋아합니다"로 알림내용이 바뀌어야 할지?
-> 100명이 좋아요하면 100번 알림을 Update?
-> 100명이 좋아요하면 100번 기존 알림 삭제 후 신규 알림 생성?
-> 알림 내용은 DB에 저장하지 않고 여러 요소를 저장한 뒤 응답할 때 문구를 만들어서 전달?? 그러면 새로운 유형의 알림이 생길 때마다 테이블 구조 변경?
```

- ID
- User ID
- Type (답변 알림인지, 좋아요 알림인지, 이벤트 알림인지 등등)
  - Url이 있으면 굳이 나누지 않아도 될지도?
- 알림 내용 (?)
  - 좋아요한 사람 수 같은 걸 표시한다면 알림 데이터를 수정하거나 구조 변경이 필요할 수도 있음
  - 이건 빼도 괜찮을지도?
- Target Url (클릭시 이동할 주소)
- 생성시간
- 활성화여부



## 다른 구조

- ID
- User ID
- Type
- Target Url
- Target ID
  - Type이 게시글 좋아요일 땐 게시글 ID, Type이 팔로우일 땐 팔로우한 사람 ID, Type이 댓글인 경우 댓글 ID (어짜피 Comment를 찾아서 Answer나 Question까지 타고갈 수 있음)
  - 근데 이러면 굳이 Url을 DB에 저장할 필요는 없을지도?
- 생성시간
- 활성화 여부