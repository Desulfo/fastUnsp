import React from "react";

import Container from "../atoms/Container";
import ImgThumbnail from "../atoms/ImgThumbnail";
import styles from "./Results.module.css";

const Results = (props) => {
  return (
    <Container className={styles.container}>
      {props.results &&
        props.results.map((result) => (
          <ImgThumbnail
            key={result.id}
            src={result.urls.thumb}
            alt={result.alt_description}
          />
        ))}
    </Container>
  );
};

export default Results;
