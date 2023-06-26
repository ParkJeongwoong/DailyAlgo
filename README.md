- 프로젝트 실행
  - yarn start  

- 코딩 패턴
  - Routers - Controllers - Services - Query 구조
    - App에서 경로별 Router 나누기
    - Router에서 세부 경로별 Controllers 나누기 (Spring의 Controller)
    - Controllers에서 처리 작업 (Spring의 Service)
    - Service에서 DB Pool과 연결된 작업 (Spring의 Repository, DAO)
    - Query에서 실행할 쿼리문 (Spring의 Repository, DAO)