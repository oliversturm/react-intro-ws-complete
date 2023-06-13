import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ProjectStepList from './ProjectStepList';
import { addStep } from '../redux-state/projectStepsSlice';

const ProjectOverview = () => {
  const [currentTime, setCurrentTime] = useState(Date());
  const update = () => {
    setCurrentTime(Date());
  };

  const projectSteps = useSelector((state) => state.projectSteps);
  const dispatch = useDispatch();

  const onAddStep = useCallback(() => {
    dispatch(addStep());
  }, [dispatch]);

  return (
    <>
      <div>Current time: {currentTime}</div>
      <button onClick={update}>Update current time</button>

      <ProjectStepList steps={projectSteps} addStep={onAddStep} />
    </>
  );
};

export default ProjectOverview;
