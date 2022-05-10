import { memo } from 'react';
import BinOpButton from './BinOpButton';

import styles from './Calculator.module.css';
import { CalculatorContext, useCalculatorDefaultData } from './calculatorData';
import CharButton from './CharButton';
import Display from './Display';
import EnterButton from './EnterButton';
import MemoryButton from './MemoryButton';
import UnOpButton from './UnOpButton';

const Calculator = () => {
  const data = useCalculatorDefaultData();

  return (
    <CalculatorContext.Provider value={data}>
      <div className={styles.outer}>
        <Display />
        <div className={styles.keys}>
          <CharButton char="7" />
          <CharButton char="8" />
          <CharButton char="9" />
          <BinOpButton op="divide" />
          <MemoryButton op="mplus" />

          <CharButton char="4" />
          <CharButton char="5" />
          <CharButton char="6" />
          <BinOpButton op="multiply" />
          <MemoryButton op="mminus" />

          <CharButton char="1" />
          <CharButton char="2" />
          <CharButton char="3" />
          <BinOpButton op="minus" />
          <MemoryButton op="mr" />

          <div />
          <CharButton char="0" />
          <CharButton char="." once={true} />
          <BinOpButton op="plus" />
          <div />

          <UnOpButton op="square" />
          <UnOpButton op="squareRoot" />
          <UnOpButton op="negate" />
          <EnterButton />
          <div />
        </div>
      </div>
    </CalculatorContext.Provider>
  );
};

export default memo(Calculator);
