import React from 'react';
import styled from 'styled-components'

import Card from './Card';

const FlexList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FlexItem = styled.div`
  flex: 0 32%;
  margin-bottom: 2%; /* (100-32*3)/2 */
`;

const CardsList = () => {
  return (
    <FlexList>
      <FlexItem>
        <Card/>
      </FlexItem>
      <FlexItem>
        <Card/>
      </FlexItem>
      <FlexItem>
        <Card/>
      </FlexItem>
      <FlexItem>
        <Card/>
      </FlexItem>
    </FlexList>
  );
};

export default CardsList;
