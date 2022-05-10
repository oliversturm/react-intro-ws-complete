import {
  Alert,
  Box,
  CircularProgress,
  ImageList,
  Typography,
} from '@mui/material';
import { memo } from 'react';
import ImageItem from './ImageItem';

const Overview = ({ items, loadState, error }) => {
  return (
    <Box>
      <Typography variant="h3">Overview of images</Typography>
      {loadState === 'error' ? (
        <Alert severity="error">{error.message}</Alert>
      ) : loadState === 'loading' ? (
        <Box sx={{ width: '100%', margin: '1rem', textAlign: 'center' }}>
          <CircularProgress />
        </Box>
      ) : (
        <ImageList variant="masonry" cols={4} gap={8}>
          {items.map((imageInfo, index) => (
            <ImageItem key={index} imageInfo={imageInfo} />
          ))}
        </ImageList>
      )}
    </Box>
  );
};

export default memo(Overview);
