import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadHifiImages } from '../redux-state/hifiImagesSlice';
import Overview from './Overview';

const Frame = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadHifiImages());
  }, [dispatch]);
  const { items, status: loadState, error } = useSelector(
    (state) => state.hifiImages,
  );

  return <Overview items={items} loadState={loadState} error={error} />;
};

export default memo(Frame);
