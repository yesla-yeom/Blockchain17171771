import styled from "styled-components";

const AfterLogInComponent = () => {
  return (
    <>
      <AfterLogInBox>
        <div className="afterLogInDiv1">
          <div className="goInfo">염예나님</div>
          <button className="logOutBtn">로그아웃</button>
        </div>
        <div className="afterLogInDiv2">
          <div className="goResume">이력서 관리 ></div>
          <div className="modifiedDate">최종 수정일 (2022.07.18)</div>
        </div>
        <div className="afterLogInDiv3">
          <div>지원현황</div>
          <div>열람기업</div>
          <div>스크랩</div>
          <div>스마트매치</div>
        </div>
      </AfterLogInBox>
    </>
  );
};

export default AfterLogInComponent;

const AfterLogInBox = styled.div`
  margin-top: 50px;
  width: 15vw;
  background-color: #fafafa;

  & .afterLogInDiv1 {
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
    padding: 10px;
  }
  & .goInfo {
    font-weight: 700;
  }
  & .afterLogInDiv2 {
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
    padding: 0 10px;
  }
  & .goResume {
    cursor: pointer;
    font-size: 12px;
    color: #2e9afe;
  }
  & .modifiedDate {
    font-size: 6px;
    color: gray;
  }
  & .afterLogInDiv3 {
    display: flex;

    justify-content: space-between;
    margin: 5px 0;
    div {
      flex: 1;
      text-align: center;
      border: 1px solid #dadada;
      background-color: #f2f2f2;
      color: #424242;
      font-size: 12px;
      cursor: pointer;
      padding: 5px;
    }
  }
  & .logOutBtn {
    background-color: #fafafa;
    border: 1px solid #dadada;
    font-size: 12px;
    color: #424242;
  }
`;
