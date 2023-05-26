import { createGlobalStyle } from "styled-components";

// Style for global style
const GlobalStyle = createGlobalStyle`
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  background-color: white;
  height: 100vh;
  width: 100vw;
}
`;

export default GlobalStyle;
