import tw, { styled, theme } from 'twin.macro';
import { useContext } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import numeral from 'numeral';
import slideOut from '../../animations/slideOut';
import DataContext from '../../context/DataContext';
import { nanoid } from 'nanoid';

const Details = () => {
  const { detailedData } = useContext(DataContext);

  return (
    <Wrapper variants={slideOut} initial='initial' animate='shown' exit='exit'>
      <BackButton to='/'>
        <BsArrowLeft />
        Back
      </BackButton>
      <MainContent>
        <Image src={detailedData.flag} />
        <Content>
          <Heading>{detailedData.name}</Heading>
          <DetailedInfo>
            <FirstSection>
              <Item>
                Native name: <NativeName>{detailedData.nativeName}</NativeName>
              </Item>
              <Item>
                Population:{' '}
                <Population>{numeral(detailedData.population).format('0,0')}</Population>
              </Item>
              <Item>
                Region: <Region>{detailedData.region}</Region>
              </Item>
              <Item>
                Sub Region: <SubRegion>{detailedData.subRegion}</SubRegion>
              </Item>
              <Item>
                Capital: <Capital>{detailedData.capital}</Capital>
              </Item>
            </FirstSection>
            <SecondSection>
              <Item>
                Top Level Domain: <TopLevelDomain>{detailedData.topLevelDomain}</TopLevelDomain>
              </Item>
              <Item>
                Currencies: <Currencies>{detailedData.currencies}</Currencies>
              </Item>
              <Item>
                Languages: <Languages>{detailedData.languages}</Languages>
              </Item>
            </SecondSection>
          </DetailedInfo>
          <BorderCountries>
            Border countries:
            {Array.isArray(detailedData.borderCountries) ? (
              detailedData.borderCountries.map(borderCountry => (
                <BorderCountry key={nanoid()}>{borderCountry}</BorderCountry>
              ))
            ) : (
              <BorderCountry style={{ width: '50%' }}>{detailedData.borderCountries}</BorderCountry>
            )}
          </BorderCountries>
        </Content>
      </MainContent>
    </Wrapper>
  );
};

const BackButton = styled(Link)`
  background: ${({ theme }) => theme.elem};
  box-shadow: 0 0 10px -4px rgba(0, 0, 0, 0.75);
  ${tw`p-xs w-[125px] rounded inline-flex items-center justify-center gap-xs my-lg`}
  &:hover {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.elem};
  }
`;

const MainContent = styled.div`
  ${tw`flex justify-between items-center gap-md mob:(flex-col items-start)`}
`;

const Image = styled.img`
  width: 100%;
  max-width: 650px;
`;

const Content = styled.div``;

const Heading = styled.h1`
  font-size: calc(${theme`fontSize.h1`} * 1.5);
  ${tw`font-bold mb-md`}
`;
const DetailedInfo = styled.div`
  gap: calc(${theme`spacing.pg`} * 2);
  ${tw`flex mob:(flex-col gap-md)`}
`;

const FirstSection = styled.ul``;
const NativeName = styled.h3``;
const Population = styled.h3``;
const Region = styled.h3``;
const SubRegion = styled.h3``;
const Capital = styled.h3``;

const SecondSection = styled.ul``;
const TopLevelDomain = styled.h3``;
const Currencies = styled.h3``;
const Languages = styled.h3``;

const Item = styled.li`
  ${tw`mb-xs font-semibold`}
  & > * {
    color: ${({ theme }) => theme.input};
    ${tw`inline`}
  }
`;

const BorderCountries = tw.div`mt-lg mob:mt-md max-w-[500px]`;
const BorderCountry = styled.div`
  background: ${({ theme }) => theme.elem};
  box-shadow: 0 0 10px -4px rgba(0, 0, 0, 0.75);
  ${tw`rounded text-center inline-block w-28 py-2xs px-xs mr-3 my-1`}
`;

const Wrapper = styled(motion.div)`
  color: ${({ theme }) => theme.text};
  ${tw`px-pg pb-xl`}
`;

export default Details;
