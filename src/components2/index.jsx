import { useState, useCallback, memo, useMemo } from 'react';
import Button from './Button';
import styles from './index.module.css';
import SearchField from './SearchField';
import Tippy from './Tippy';

const oppositeType = (t) => {
  switch (t) {
    case 'default':
      return 'important';
    case 'important':
      return 'default';
    default:
      return 'default';
  }
};

function ComponentTechniquesPage() {
  const [button1Clicks, setButton1Clicks] = useState(0);
  const button1Click = useCallback(() => {
    setButton1Clicks((c) => c + 1);
  }, [setButton1Clicks]);

  const [button1Type, setButton1Type] = useState('default');

  const [button2Clicks, setButton2Clicks] = useState(0);
  const button2Click = useCallback(() => {
    setButton2Clicks((c) => c + 1);
  }, [setButton2Clicks]);

  const [searchFieldValue, setSearchFieldValue] = useState('');
  const [searchValue, setSearchValue] = useState(null);

  const [showBlock, setShowBlock] = useState(true);
  const showBlockChanged = useCallback((e) => {
    setShowBlock(e.target.checked);
  }, []);

  const [tooltipPlacement, setTooltipPlacement] = useState('bottom');
  const tooltipPlacementChanged = useCallback(
    (e) => {
      setTooltipPlacement(e.target.value);
    },
    [setTooltipPlacement]
  );

  // You could repeat the expression
  //   `oppositeType(button1Type)`
  // in each place below where it's needed. But the useMemo
  // hook can recalculate it automatically whenever button1Type
  // changes, one time only, and then you gain efficiency if
  // the result is used more than once.
  const oppositeButtonType = useMemo(
    () => oppositeType(button1Type),
    [button1Type]
  );

  return (
    <main>
      <div className={styles.container}>
        <h3>Buttons</h3>
        <div className={styles.flex}>
          <Tippy text="This is the first button" placement={tooltipPlacement}>
            <Button type={button1Type} onClick={button1Click}>
              Button 1 clicked {button1Clicks} times
            </Button>
          </Tippy>

          <Button type="important" onClick={button2Click}>
            Button 2 clicked {button2Clicks} times
          </Button>

          <Tippy
            text="Click this button to toggle the type of the first button from 'default' to 'important' and vice versa"
            placement={tooltipPlacement}
          >
            <Button
              type={
                oppositeButtonType === 'important'
                  ? 'switchToImportant'
                  : 'switchToDefault'
              }
              onClick={() => {
                setButton1Type(oppositeButtonType);
              }}
            >
              Change Button 1 type to &apos;{oppositeButtonType}&apos;
            </Button>
          </Tippy>

          <Button type={{ backgroundColor: 'green' }} />
        </div>
      </div>

      <div className={styles.container}>
        <h3>Tooltip Placement</h3>
        {['top', 'bottom', 'right', 'left'].map((p, i) => (
          <label key={i} className={styles.placementLabel}>
            <input
              type="radio"
              name="placement"
              checked={tooltipPlacement === p}
              value={p}
              onChange={tooltipPlacementChanged}
            />
            {p}
          </label>
        ))}
      </div>

      <div className={styles.container}>
        <h3>Search Field</h3>
        <SearchField onChange={setSearchFieldValue} onSearch={setSearchValue} />
        <div className={styles.extra}>
          Current search field value: {searchFieldValue}
        </div>
        <div className={styles.extra}>Last search for: {searchValue}</div>
      </div>

      <div className={styles.container}>
        <h3>Show/Hide Block</h3>
        <label>
          <input
            type="checkbox"
            checked={showBlock}
            onChange={showBlockChanged}
          />
          Show
        </label>
        {showBlock && (
          <div className={styles.extra}>
            This part will show and hide dynamically
          </div>
        )}
      </div>
    </main>
  );
}

const ComponentTechniquesPageMemo = memo(ComponentTechniquesPage);
export default ComponentTechniquesPageMemo;
