import { memo, useCallback, useMemo } from 'react';
import { useCalculatorData } from './calculatorData';

import styles from './Button.module.css';

const toFloat = (x) => parseFloat(x, 10);

const ops = {
  mplus: {
    caption: 'M+',
    handler: (v0r, mvr, v0, mv) => {
      mvr((mv + v0).toString(10));
    },
  },
  mminus: {
    caption: 'M-',
    handler: (v0r, mvr, v0, mv) => {
      mvr((mv - v0).toString(10));
    },
  },
  mr: {
    caption: 'MR',
    handler: (v0r, mvr, v0, mv) => {
      v0r(mv.toString(10));
    },
  },
};

const MemoryButton = ({ op }) => {
  const {
    value0,
    memval,
    actions: { value0replace, memvalReplace },
  } = useCalculatorData();

  const opInfo = useMemo(() => ops[op], [op]);

  const onClick = useCallback(() => {
    if (opInfo) {
      opInfo.handler(
        value0replace,
        memvalReplace,
        toFloat(value0),
        toFloat(memval)
      );
    }
  }, [opInfo, value0replace, memvalReplace, value0, memval]);

  return (
    <div className={styles.button} onClick={onClick}>
      {opInfo?.caption || 'INVALID'}
    </div>
  );
};

const MemoryButtonMemo = memo(MemoryButton);
export default MemoryButtonMemo;
