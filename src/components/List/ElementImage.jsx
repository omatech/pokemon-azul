import styled from 'styled-components';

const MyStyledImage = styled.img`
  border:solid;
  border-color: black;
`;

const ElementImage = ({url, name}) =>
    <MyStyledImage src={url} alt={name} />
    
export default ElementImage;