import { memo } from 'react';
import styles from './index.module.css';
import Calculator from './Calculator';

const CalculatorPage = () => {
  return (
    <div className={styles.container}>
      <h3>Calculators</h3>
      <div className={styles.calcbox}>
        <Calculator />
        <Calculator />
      </div>
    </div>
  );
};

const CalculatorPageMemo = memo(CalculatorPage);
export default CalculatorPageMemo;
