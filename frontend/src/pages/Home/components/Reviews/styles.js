import styled from "styled-components";

export const Main = styled.div`
  background: ${({theme}) => theme.colors.backgroundPrimaryBox};
  padding: ${({theme}) => theme.spacing.padding.small};
  border-radius: 8px;
`;

export const Title = styled.h2`
  text-transform: uppercase;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  margin-top: 1rem;
  gap: ${({theme}) => theme.spacing.between_elements.between_sections};

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.small};
  background: #FFF;
  padding: 
  ${({theme}) => theme.spacing.padding.big_small}
  ${({theme}) => theme.spacing.padding.very_small};
  border-radius: 30px;

  h3 {
    text-align: center;
  }

  span {
    color: #000;
  }
`;