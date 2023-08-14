import React, { useContext } from "react";
import { TitleContext } from "contexts/TitleContext";
import { Container, CoverWrapper, InfoWrapper, DetailsWrapper } from "./styles";

export default function TitleCard({
  id,
  title,
  category,
  description,
  volumesNumber,
  chaptersNumber,
  views,
  author,
  year, 
  cover
}) {
  const { setTitleValues, setIsModalOpen } = useContext(TitleContext);

  const openModal = () => {
    setTitleValues({
      id: id,
      title: title,
      description: description,
      cover: cover,
      category: category,
      volumesNumber: volumesNumber,
      chaptersNumber: chaptersNumber,
      views: views,
      author: author
    });
    setIsModalOpen(true);
  };

  return(
    <Container>
      <CoverWrapper onClick={openModal}>
        <img src={cover} alt="Capa da HQ" />
        <InfoWrapper>
          <span>{category}</span>
          <span>{year}</span>
        </InfoWrapper>
      </CoverWrapper>
      <DetailsWrapper>
        <h3>{title}</h3>
      </DetailsWrapper>
    </Container>
  );
}