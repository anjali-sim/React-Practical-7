import AppStyle from "./styled/App.style"
import Heading from "./components/Header/Heading"
import Input from "./components/Input/Input"
import Button from "./components/Button/Button"
import DivStyle from "./styled/DivStyle.style"
import Image from "./components/Image/Image"
import InputFile from "./InputFile/InputFile"
import DivImageStyle from "./styled/DivImageStyle.style"

function App() {

  return (
    <>
    <AppStyle>
      <DivStyle>
      <Heading />
      <InputFile />
      <Input />
      <Button />
      </DivStyle>
      <DivImageStyle>
        <Image />
      </DivImageStyle>
    </AppStyle>
    </>
  )
}

export default App
