import tw from 'twin.macro';
import Search from '../../components/Search';
import Countries from '../../components/Countries';
import slideIn from '../../animations/slideIn';
import { SearchProvider } from '../../context/SearchContext';

const Home = () => {
  return (
    <Wrapper variants={slideIn} initial='initial' animate='shown' exit='exit'>
      <SearchProvider>
        <Search />
        <Countries />
      </SearchProvider>
    </Wrapper>
  );
};

const Wrapper = tw.div`px-pg`;

export default Home;
