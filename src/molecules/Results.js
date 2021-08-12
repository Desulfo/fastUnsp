import React from "react";
import Container from "../atoms/Container";
import ImgThumbnail from "./ImgThumbnail";

const Results = (props) => {
    console.log(props.results)
    return(
        <Container>
            {props.results && props.results.map((result)=><ImgThumbnail src={result.urls.thumb}/>)}
        </Container>
    )
}

export default Results;