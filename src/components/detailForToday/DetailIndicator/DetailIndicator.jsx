import React from 'react';
import classes from './DetailIndicator.module.css';
import { getWindDirection } from '../../../utils/degWind';

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
  const degSvgStyle = id === 0 ? `rotate(${+indicator.deg})` : '';
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
            transform={degSvgStyle}
          >
            <g clipPath="url(#clip0_802_2)">
              <path
                d="M19 38C29.4934 38 38 29.4934 38 19C38 8.50659 29.4934 0 19 0C8.50659 0 0 8.50659 0 19C0 29.4934 8.50659 38 19 38Z"
                fill="#48484A"
              />
              <path
                d="M9.13379 27.228L17.9674 7.05114C18.3214 6.24249 19.449 6.1964 19.7966 6.97638L28.5658 26.6529C28.9156 27.4376 28.1382 28.3112 27.3039 28.0884C20.9591 26.3946 16.6405 26.5462 10.3586 28.5675C9.52807 28.8348 8.78256 28.0302 9.13379 27.228Z"
                fill="#E6E6E6"
              />
            </g>
            <defs>
              <clipPath id="clip0_802_2">
                <rect width="38" height="38" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <div className={classes.indicatorImageTitle}>
            {getWindDirection(indicator.deg)}
          </div>
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
