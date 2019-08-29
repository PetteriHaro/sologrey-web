import React from 'react';
import styles from './CompanyInfo.module.css';

const companyInfo = props => (
  <div className={styles.InfoContainer}>
    <img src={props.imageSource} alt="Logo" />
    <p>{props.text}</p>
    {props.altText && <p>{props.altText}</p>}
    <a target="_blank" rel="noopener noreferrer" href={props.link}>
      {props.website}
    </a>
  </div>
);

export default companyInfo;
