import tw, { styled } from 'twin.macro';
import Country from './Country';
import { nanoid } from 'nanoid';
import { useContext } from 'react';
import DataContext from '../../context/DataContext';

const Countries = () => {
  const { modifiedData, error, isLoading, setMaxFetch } = useContext(DataContext);

  const loadMore = () => setMaxFetch(prev => prev + 8);

  return (
    <>
      {modifiedData &&
        (isLoading && !error ? (
          <Paragraph>Loading..</Paragraph>
        ) : !isLoading && !error ? (
          modifiedData &&
          !isLoading &&
          !error && (
            <>
              <Wrapper>
                {modifiedData.map(countryData => (
                  <Country key={nanoid()} modifiedData={countryData} />
                ))}
              </Wrapper>
              <LoadMoreButton onClick={loadMore}>Load more</LoadMoreButton>
            </>
          )
        ) : (
          <Paragraph>There is an error</Paragraph>
        ))}
    </>
  );
};

const Paragraph = styled.div`
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.elem};
  border: 2px solid ${({ theme }) => theme.shadow};
  box-shadow: 0 0 10px -4px rgba(0, 0, 0, 0.75);
  ${tw`p-xs text-center font-semibold w-[150px] rounded`};
`;

const LoadMoreButton = styled.button`
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.elem};
  box-shadow: 0 0 10px -4px rgba(0, 0, 0, 0.75);
  margin: 0 auto;
  ${tw`p-xs w-[125px] rounded mt-lg mb-lg`};
  &:hover {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.elem};
  }
`;

const Wrapper = styled.div`
  ${tw`grid mob:px-pg row-gap-md col-gap-xl`}
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export default Countries;
