import React from 'react';
import styles from './CompanyInfo.module.css';

const companyInfo = (props) => (
  <div className={styles.InfoContainer}>
    <img
      src={props.imageSource}
      alt="Logo"
      style={{
        height: props.height,
        marginTop: props.sancal ? '-20px' : '0',
        marginBottom: props.sancal ? '-40px' : '0',
        maxWidth: props.maxWidth ? props.maxWidth : '120px',
      }}
    />
    <p>{props.text}</p>
    {props.altText && <p>{props.altText}</p>}
    {props.altText && <p>{props.altTextTwo}</p>}
    <a target="_blank" rel="noopener noreferrer" href={props.link}>
      {props.website}
    </a>
  </div>
);

export default companyInfo;
