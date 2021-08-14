import React from "react";

import styles from "./ImgThumbnail.module.css";

const ImgThumbnail = (props) => {
  return <img className={styles.img} src={props.src} />;
};
export default ImgThumbnail;
