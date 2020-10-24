import styled from 'styled-components';

const Category = styled.p`
 color: rgba(0,0,0,0.5);
 text-transform: uppercase;
 margin-bottom: 8px;
`;

const Title = styled.p`
 font-size: ${props => props.theme.fontSizes.medium};
 margin-bottom: 24px;
`;

const Price = styled.span`
 font-size: ${props => props.theme.fontSizes.large};
 &:before {
   content: "$";
   vertical-align: 50%;
   font-size: 30px;
 }
`;

export {
  Category,
  Title,
  Price
}
