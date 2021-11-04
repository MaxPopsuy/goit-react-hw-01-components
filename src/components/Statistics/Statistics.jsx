import React from 'react';
import styles from "./statistics.module.css";

const colorArr = [];
function getRandom(min, max) {
  const result = Math.floor(Math.random() * (max - min)) + min;
  if(colorArr.length >= 3) {
    colorArr.length = 0;
  }
  colorArr.push(result);
  return result;
}

const Statistics = props => {
  return (
    <section className={styles.statistics}>
        {props.title && (
          <h2 className={styles.title}>Upload stats</h2>
        )}
      
      <ul className={styles.stat__list}>
        {props.stats.map(elem => (
          <li key={elem.id} className={styles.item} style={{
            backgroundColor: `rgb(${getRandom(0, 255)}, ${getRandom(0, 100)}, ${getRandom(0, 255)})`,
            boxShadow: `4px 4px 8px 0px rgba(${colorArr[0]}, ${colorArr[1]}, ${colorArr[2]}, 0.5)`,
          }}>
            <span className={styles.label}>{elem.label}</span>
            <span className={styles.percentage}> {elem.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );

};

export default Statistics;