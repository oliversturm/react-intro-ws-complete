import { memo, useCallback, useMemo } from 'react';
import { useCalculatorData } from './calculatorData';

import styles from './Button.module.css';

const toFloat = (x) => parseFloat(x, 10);

const unaryOp = (f) => (v) => {
  const result = f(toFloat(v));
  return result.toString(10);
};

const ops = {
  square: {
    caption: 'x²',
    handler: unaryOp((v) => v * v),
  },
  squareRoot: {
    caption: '√',
    handler: unaryOp((v) => Math.sqrt(v)),
  },
  negate: {
    caption: '+/-',
    handler: unaryOp((v) => -v),
  },
};

const UnOpButton = ({ op }) => {
  const {
    value0,
    actions: { value0replace },
  } = useCalculatorData();

  const opInfo = useMemo(() => ops[op], [op]);

  const onClick = useCallback(() => {
    if (opInfo) {
      value0replace(opInfo.handler(value0));
    }
  }, [value0replace, opInfo, value0]);

  return (
    <div className={styles.button} onClick={onClick}>
      {opInfo?.caption || 'INVALID'}
    </div>
  );
};

export default memo(UnOpButton);
