import AppStyle from "./styled/App.style";
import Wrapper from "./components/Form/Wrapper";
import Image from "./components/Image/Image";
// import In from "./components/Input/In";

function App() {
  return (
    <>
      <AppStyle>
        <Wrapper />
        <Image />
        {/* <In /> */}
      </AppStyle>
    </>
  );
}

export default App;
