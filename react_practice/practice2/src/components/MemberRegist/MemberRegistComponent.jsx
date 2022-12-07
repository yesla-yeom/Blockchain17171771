import styled from "styled-components";

const MemberRegistComponent = () => {
  return (
    <MemberRegistBox>
      <div className="joinLogo">JOBKOREA</div>
      <div className="memberRegist">개인회원</div>
      <div>회원가입하고 다양한 혜택을 누리세요!</div>
      <div>*필수 입력 정보입니다.</div>
      <input type="text" placeholder="이름(실명)*" />
      <input type="text" placeholder="아이디*" />
      <input
        type="password"
        placeholder="비밀번호(8~16자의 영문, 숫자, 특수기호)*"
      />
      <input type="email" placeholder="이메일*" />
      <input type="tel" placeholder="휴대폰번호*" />
      <div>개인정보 유효기간 선택*</div>
      <input type="checkbox" name="1년" value="1년"></input>
      <input type="checkbox" name="3년" value="3년"></input>
      <input type="checkbox" name="회원탈퇴시" value="회원탈퇴시"></input>
    </MemberRegistBox>
  );
};

// 하다 말았다

export default MemberRegistComponent;

const MemberRegistBox = styled.div`
  margin-top: 5%;
  width: 100%;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  background-image: url(./join_logo.png);
  background-repeat: no-repeat;

  & .joinLogo {
    font-size: 50px;
    font-weight: 700;
    color: #3399ff;
  }
  & .memberRegist {
    display: flex;
    justify-content: center;
    width: 50%;
    background-color: #3399ff;
    color: black;
    font-size: 25px;
    font-weight: 700;
    padding: 5%;
  }
`;
