import React from "react";
import Container from "../atoms/Container";
import ImgThumbnail from "../atoms/ImgThumbnail";

const Results = (props) => {
  return (
    <Container>
      {props.results &&
        props.results.map((result) => <ImgThumbnail src={result.urls.thumb} />)}
    </Container>
  );
};

export default Results;
