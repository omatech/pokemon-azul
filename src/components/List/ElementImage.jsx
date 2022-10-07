import { useEffect } from 'react';
import styled from 'styled-components';

const MyStyledImage = styled.img`
  border: solid;
  border-color: black;
`;

const ElementImage = ({ url, name }) => {
  useEffect(() => console.log('<ElementImage>'));
  return <MyStyledImage src={url} alt={name} />;
};

export default ElementImage;
