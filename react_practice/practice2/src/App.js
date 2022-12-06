import BeforeLogInContainer from "./components/BeforeLogIn/BeforeLogInContainer";
import AfterLogInContainer from "./components/AfterLogIn/AfterLogInContainer";
import MemberRegistContainer from "./components/MemberRegist/MemberRegistContainer";

function App() {
  return (
    <div>
      <BeforeLogInContainer></BeforeLogInContainer>
      <AfterLogInContainer></AfterLogInContainer>
      <MemberRegistContainer></MemberRegistContainer>
    </div>
  );
}

export default App;
