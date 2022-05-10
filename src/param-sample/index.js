import { Box } from '@mui/material';
import { memo } from 'react';
import { useLocation, useNavigationType, useParams } from 'react-router-dom';

const ParamSample = () => {
  const params = useParams();
  const location = useLocation();
  const navType = useNavigationType();

  return (
    <>
      <Box>
        The parameter <code>value</code> has{' '}
        {params.value ? `the value "${params.value}"` : 'no value'}.
      </Box>
      <Box>
        This page location is{' '}
        <code>
          {JSON.stringify(location)}, and the last navigation type was{' '}
          <code>{navType}</code>.
        </code>
      </Box>
    </>
  );
};

export default memo(ParamSample);
