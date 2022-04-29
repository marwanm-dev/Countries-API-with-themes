import tw, { styled } from 'twin.macro';
import SearchBar from './SearchBar';
import Filter from './Filter';

const Search = () => {
  return (
    <Wrapper>
      <SearchBar />
      <Filter />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${tw`gap-sm my-lg flex items-center justify-between mob:(flex-col gap-sm items-start)`}
  color: ${({ theme }) => theme.text};
  font-weight: 600;
`;

export default Search;
