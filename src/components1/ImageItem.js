import { ImageListItem, ImageListItemBar } from '@mui/material';
import { memo } from 'react';

const ImageItem = ({ imageInfo }) => (
  <ImageListItem>
    <img src={imageInfo.media.m} alt={imageInfo.title} />
    <ImageListItemBar title={imageInfo.title} />
  </ImageListItem>
);

export default memo(ImageItem);
