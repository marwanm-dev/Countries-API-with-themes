import tw, { styled } from 'twin.macro';
import Theme from './Theme';
import { motion } from 'framer-motion';
import navbar from '../../animations/navbar';

const Navbar = ({ theme, themeToggler }) => {
  return (
    <Wrapper variants={navbar} initial='initial' animate='shown' exit='exit'>
      <Heading>Where in the world?</Heading>
      <Theme theme={theme} themeToggler={themeToggler} />
    </Wrapper>
  );
};

const Wrapper = styled(motion.nav)`
  ${tw`py-md px-pg flex justify-between items-center`}
  background: ${({ theme }) => theme.elem};
  box-shadow: black 0px 50px 100px -45px;
`;

const Heading = styled.h1`
  color: ${({ theme }) => theme.text};
  font-weight: 800;
`;

export default Navbar;
