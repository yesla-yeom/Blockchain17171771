import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import image from "./sort-down-solid.svg";

function Practice() {
  return (
    <KingDiv>
      <TempTable>
        <TempThead>
          <tr>
            <TempTh className="firstRow">
              월<div className="svg"></div>
            </TempTh>
            <TempTh className="firstRow">
              일자<div></div>
            </TempTh>
            <TempTh className="firstRow">
              지출항목<div></div>
            </TempTh>
            <TempTh className="firstRow">상세항목</TempTh>
            <TempTh className="firstRow">금액</TempTh>
            <TempTh className="firstRow">비고</TempTh>
          </tr>
        </TempThead>
        <TempTbody>
          <tr>
            <TempTd className="secondRow">11</TempTd>
            <TempTd className="secondRow">10</TempTd>
            <TempTd className="secondRow">식비</TempTd>
            <TempTd className="secondRow">떡볶이</TempTd>
            <TempTd className="secondRow">₩3,000</TempTd>
            <TempTd className="secondRow"></TempTd>
          </tr>
          <tr>
            <TempTd className="thirdRow"></TempTd>
            <TempTd className="thirdRow">15</TempTd>
            <TempTd className="thirdRow">통신비</TempTd>
            <TempTd className="thirdRow">휴대폰 요금</TempTd>
            <TempTd className="thirdRow">₩11,800</TempTd>
            <TempTd className="thirdRow">알뜰폰으로 바꿈</TempTd>
          </tr>
          <tr>
            <TempTd className="fthRow"></TempTd>
            <TempTd className="fthRow">20</TempTd>
            <TempTd className="fthRow">생활비</TempTd>
            <TempTd className="fthRow">용돈</TempTd>
            <TempTd className="fthRow">₩10,000</TempTd>
            <TempTd className="fthRow"></TempTd>
          </tr>
        </TempTbody>
      </TempTable>
    </KingDiv>
  );
}

export default Practice;

const KingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TempTable = styled.table`
  border: 3px solid black;
  border-collapse: collapse;
`;

const TempThead = styled.thead`
  border: 1px solid black;

  & .firstRow {
    background-color: white;
    border: 1px solid black;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-position: right 5px bottom 5px;
    width: 120px;
    &:first-child {
      width: 80px;
    }
    &:nth-child(2) {
      width: 80px;
    }
    &:nth-child(5) {
      width: 70px;
    }
  }
`;

const TempTh = styled.th`
  color: brown;
  text-align: left;
`;

const TempTbody = styled.tbody`
  & .secondRow {
    background-color: #efdbe5;
    &:nth-child(2) {
      border-bottom: 1px solid black;
      border-left: 1px solid black;
      border-right: 1px solid black;
      text-align: right;
    }
    &:nth-child(3) {
      border-bottom: 1px solid black;
      border-left: 1px solid black;
      border-right: 1px solid black;
    }
    &:nth-child(4) {
      border-bottom: 1px solid black;
      border-left: 1px solid black;
      border-right: 1px solid black;
    }
    &:nth-child(5) {
      border-bottom: 1px solid black;
      border-left: 1px solid black;
      border-right: 1px solid black;
    }
    &:nth-child(6) {
      border-bottom: 1px solid black;
    }
  }
  & .thirdRow {
    background-color: white;
    &:nth-child(2) {
      border-bottom: 1px solid black;
      border-left: 1px solid black;
      border-right: 1px solid black;
      text-align: right;
    }
    &:nth-child(3) {
      border-bottom: 1px solid black;
      border-left: 1px solid black;
      border-right: 1px solid black;
    }
    &:nth-child(4) {
      border-bottom: 1px solid black;
      border-left: 1px solid black;
      border-right: 1px solid black;
    }
    &:nth-child(5) {
      border-bottom: 1px solid black;
      border-left: 1px solid black;
      border-right: 1px solid black;
    }
    &:nth-child(6) {
      border-bottom: 1px solid black;
    }
  }
  & .fthRow {
    background-color: #efdbe5;
    &:nth-child(2) {
      border-bottom: 1px solid black;
      border-left: 1px solid black;
      border-right: 1px solid black;
      text-align: right;
    }
    &:nth-child(3) {
      border-bottom: 1px solid black;
      border-left: 1px solid black;
      border-right: 1px solid black;
    }
    &:nth-child(4) {
      border-bottom: 1px solid black;
      border-left: 1px solid black;
      border-right: 1px solid black;
    }
    &:nth-child(5) {
      border-bottom: 1px solid black;
      border-left: 1px solid black;
      border-right: 1px solid black;
    }
    &:nth-child(6) {
      border-bottom: 1px solid black;
    }
  }
`;

const TempTd = styled.td`
  color: brown;
`;
