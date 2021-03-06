import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import randomColor from '../../assistance/randomColor';

function Statistics({ title, stats }) {
  return (
    <div className={styles.statistics}>
      {title ? <h2 className={styles.title}>{title}</h2> : null}
      <ul className={styles.statList}>
        {stats.map(stat => (
          <li
            className={styles.item}
            key={stat.id}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={styles.label}> {stat.label}</span>
            <span className={styles.percentage}>{stat.percentage} %</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

Statistics.defaultProps = {
  title: '',
};

Statistics.propType = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
