import React from 'react';
import classes from './DetailIndicator.module.css';

const DetailIndicator = ({ indicator }) => {
  const { id, title, name, value } = indicator;
  const styleTop = {
    marginTop: '11px',
  };
  const styleBottom = {
    marginTop: '21px',
    marginBottom: '29px',
  };
  const stylePressure = {
    fontSize: '18px',
    lineHeight: '21px',
  };
  return (
    <div className={classes.detailIndicator}>
      <h3 className={classes.detailIndicatorTitle}>{title}</h3>
      <div
        className={classes.detailIndicatorValue}
        style={id === 0 || id === 1 ? styleTop : styleBottom}
      >
        {value}{' '}
        <span
          className={classes.detailIndicatorValueName}
          style={id === 3 ? stylePressure : null}
        >
          {name}
        </span>
      </div>
      {id === 0 && (
        <div className={classes.indicatorImage}>
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="19" cy="19" r="19" fill="#48484A" />
            <path
              d="M18.1951 31.0029L10.0872 10.8978C9.76221 10.092 10.5487 9.28365 11.3631 9.58643L31.9073 17.2246C32.7267 17.5293 32.7906 18.6717 32.0237 19.0912C26.1915 22.2822 23.1612 25.3608 20.0501 31.0907C19.6388 31.8482 18.5175 31.8023 18.1951 31.0029Z"
              fill="#E6E6E6"
            />
          </svg>
          {/* <div className={classes.indicatorImageTitle}>СЗ</div> */}
        </div>
      )}
      {id === 1 && value && (
        <div className={classes.progressbarContainer}>
          <div className={classes.percents}>
            <p>0</p>
            <p>50</p>
            <p>100</p>
          </div>
          <div className={classes.progressbar}>
            <span style={{ width: `${value}%` }}></span>
          </div>
          <div className={classes.percentSymbol}>%</div>
        </div>
      )}
    </div>
  );
};

export default DetailIndicator;
