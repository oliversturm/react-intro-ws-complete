import { memo } from 'react';

const ProjectStepList = ({ steps, addStep }) => {
  const handle = (i) => () => {
    alert(`Now doing something with item ${i}`);
  };

  return (
    <>
      <h3>Project Steps:</h3>
      <ul>
        {steps.map((s, i) => (
          <li key={i}>
            {s} <button onClick={handle(i)}>✓</button>
          </li>
        ))}
      </ul>
      <button onClick={addStep}>Add Step</button>
    </>
  );
};

export default memo(ProjectStepList);
