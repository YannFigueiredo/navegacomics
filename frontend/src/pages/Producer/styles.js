import styled from "styled-components";

export const Main = styled.div`
  padding: ${({theme}) => theme.spacing.padding.small} ${({theme}) => theme.spacing.padding.large};
  display: flex;
  gap: ${({theme}) => theme.spacing.between_elements.between_sections};
  flex-wrap: wrap;

  @media screen and (max-width: 600px) {
    padding: ${({theme}) => theme.spacing.padding.small}};
  }
`;