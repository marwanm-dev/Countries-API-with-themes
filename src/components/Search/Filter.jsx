import tw, { styled } from 'twin.macro';
import { useState, useEffect, useContext } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import SearchContext from '../../context/SearchContext';
import { nanoid } from 'nanoid';

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  const { filteredRegion, setFilteredRegion } = useContext(SearchContext);

  useEffect(() => setIsOpen(false), [filteredRegion]);

  return (
    <Wrapper>
      <Heading>{filteredRegion ? filteredRegion : 'Filter by Region'}</Heading>
      <Icon onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        <HiChevronDown />
      </Icon>
      <Select isOpen={isOpen}>
        {regions.map(region => (
          <Option key={nanoid()} onClick={() => setFilteredRegion(region)}>
            {region}
          </Option>
        ))}
      </Select>
    </Wrapper>
  );
};

const Select = styled.div`
  background: ${({ theme }) => theme.elem};
  display: none;
  ${tw`w-full rounded-md py-xs absolute top-full left-0 mt-xs`}
  ${({ isOpen }) => isOpen && tw`block`}
`;

const Option = styled.h3`
  ${tw`px-md py-xs cursor-pointer`}
`;

const Heading = styled.h3`
  color: ${({ theme }) => theme.text};
`;

const Icon = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  ${({ isOpen }) => isOpen && `transform: rotate(180deg);`}
`;

const Wrapper = styled.div`
  background: ${({ theme }) => theme.elem};
  ${tw`relative  w-[210px] rounded-md px-md py-sm flex items-center justify-between`}
`;
export default Filter;
