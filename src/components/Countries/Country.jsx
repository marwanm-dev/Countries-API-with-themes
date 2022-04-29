import tw, { styled } from 'twin.macro';
import { useTheme } from 'styled-components';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import numeral from 'numeral';
import DataContext from '../../context/DataContext';

const Country = ({ modifiedData }) => {
  const { setDetailedData } = useContext(DataContext);

  const handleClick = () => setDetailedData(modifiedData);

  return (
    <Wrapper
      onClick={handleClick}
      whileHover={{
        scale: 1.035,
        boxShadow: `${useTheme().shadow} 0px 48px 150px -125px`,
      }}
      transition={{ duration: 0.15, type: 'linear' }}
      whileTap={{ scale: 0.9 }}>
      <Link to='details'>
        <Image src={modifiedData.flag} />
        <Content>
          <Name>{modifiedData.name}</Name>
          <Info>
            <Item>
              Population:<Population>{numeral(modifiedData.population).format('0,0')}</Population>
            </Item>
            <Item>
              Region:<Region>{modifiedData.region}</Region>
            </Item>
            <Item>
              Capital:<Capital>{modifiedData.capital}</Capital>
            </Item>
          </Info>
        </Content>
      </Link>
    </Wrapper>
  );
};

const Image = styled.img`
  width: 100%;
  height: 200px;
`;

const Content = styled.div`
  ${tw`px-md py-md`}
`;

const Name = tw.h2`font-extrabold mb-sm`;

const Info = styled.ul`
  list-style: none;
`;

const Item = styled.li`
  ${tw`mb-xs font-semibold`}
  & > * {
    color: ${({ theme }) => theme.input};
    ${tw`inline ml-1`}
  }
`;

const Population = styled.h3``;

const Region = styled.h3``;

const Capital = styled.h3``;

const Wrapper = styled(motion.div)`
  background: ${({ theme }) => theme.elem};
  color: ${({ theme }) => theme.text};
  ${tw`rounded-md overflow-hidden`}
`;

export default Country;
