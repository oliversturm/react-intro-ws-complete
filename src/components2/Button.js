import { memo } from 'react';
import styles from './Button.module.css';

const Button = ({ children, type = 'default', onClick }) => {
  // Use the `styles[type] || type` expression
  // just to freak out TypeScript fans.
  return (
    <div className={styles[type] || type} onClick={onClick}>
      {children || 'This button has no content'}
    </div>
  );
};

export default memo(Button);
