import React, {useEffect} from 'react';
import styled from 'styled-components'

import {useDispatch, useSelector} from 'react-redux';

import Card from './Card';
import {startFetchProducts, selectCheapestProduct} from '../store/actions/productActions';
import Button from './Button';

const FlexList = styled.div`  
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 40px;
`;

const BottomControl = styled.div`
  text-align: center;
`;

const CardsList = () => {
  const productsList = useSelector(state => state.product.productsList);
  const productsListLoading = useSelector(state => state.product.productsListLoading);
  const productsListError = useSelector(state => state.product.productsListError);

  const dispatch = useDispatch();

  const handleSelectCheapest = () => {
    dispatch(selectCheapestProduct());
  };

  useEffect(() => {
    dispatch(startFetchProducts());
  }, []);

  if (productsListLoading) {
    return (
      <p>Loading...</p>
    )
  }
  if (productsListError) {
    return (
      <p>Error: {productsListError.message}</p>
    )
  }
  return (
    <>
      <FlexList>
        {productsList.map(product => (
          <Card key={product.id} product={product}/>
        ))}
      </FlexList>
      <BottomControl>
        <Button onClick={handleSelectCheapest}>Buy cheapest</Button>
      </BottomControl>
    </>
  );
};

export default CardsList;
