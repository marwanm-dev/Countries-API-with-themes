import tw, { styled } from 'twin.macro';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const Theme = ({ theme, themeToggler }) => {
  return (
    <Wrapper>
      <Icon fsBasedOnTheme={theme} onClick={themeToggler}>
        {theme === 'light' ? <BsMoonFill /> : <BsSunFill />}
      </Icon>
      <Heading>{theme.charAt(0).toUpperCase() + theme.slice(1)} Mode</Heading>
    </Wrapper>
  );
};

const Icon = styled.div`
  cursor: pointer;
  ${({ fsBasedOnTheme }) => fsBasedOnTheme !== 'light' && tw`text-lg`}
  color: ${({ theme }) => theme.text};
`;
const Wrapper = styled.div`
  ${tw`flex items-center gap-sm`};
`;
const Heading = styled.h2`
  color: ${({ theme }) => theme.text};
  font-weight: 600;
`;

export default Theme;
