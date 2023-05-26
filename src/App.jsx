import AppStyle from "./styled/App.style"
import Heading from "./components/Header/Heading"
import Input from "./components/Input/Input"
import Button from "./components/Button/Button"
import FormWrapper from "./styled/FormWrapper.style"
import Image from "./components/Image/Image"
import InputFile from "./InputFile/InputFile"

function App() {

  return (
    <>
    <AppStyle>
      <FormWrapper>
      <Heading />
      <InputFile />
      <Input />
      <Button />
      </FormWrapper>
        <Image />
    </AppStyle>
    </>
  )
}

export default App
