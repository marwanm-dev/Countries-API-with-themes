import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

const GlobalTypography = createGlobalStyle`
html {
  ${tw`text-default mob:text-default-mob`}
}
body {
  ${tw`font-default`}
}
h1 {
  ${tw`text-h1`}
  
}
h2 {
  ${tw`text-h2`}
}
h3 {
  ${tw`text-h3`}
}
h4 {
  ${tw`text-h4`}
}
h5 {
  ${tw`text-h5`}
}
h6 {
  ${tw`text-h6`}
}
p {
  ${tw`text-p`}
}
li {
  ${tw`text-li`}
}
a {
  ${tw`text-a`}
}
`;

export default GlobalTypography;
