import tw, { styled } from 'twin.macro';
import { useState, useEffect, useContext } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import SearchContext from '../../context/SearchContext';
import DataContext from '../../context/DataContext';
import { nanoid } from 'nanoid';

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { filteredRegion, setFilteredRegion } = useContext(SearchContext);
  const { regions } = useContext(DataContext);

  useEffect(() => setIsOpen(false), [filteredRegion]);

  return (
    <Wrapper>
      <Heading>{filteredRegion || 'Filter by Region'}</Heading>
      <Icon onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        <HiChevronDown />
      </Icon>
      <Select isOpen={isOpen}>
        <Option onClick={() => setFilteredRegion('')}>All</Option>
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
  box-shadow: 0 0 10px -4px rgba(0, 0, 0, 0.75);
  ${tw`w-full rounded-md absolute top-full left-0 mt-xs py-xs`}
  ${({ isOpen }) => isOpen && tw`block`}
`;

const Option = styled.h3`
  ${tw`px-md py-xs cursor-pointer`}
  &:hover {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.elem};
  }
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
  ${tw`relative  w-[210px] z-10 rounded-md px-md py-sm flex items-center justify-between`}
`;
export default Filter;
