import { ImageListItem, ImageListItemBar } from '@mui/material';
import { memo } from 'react';

const ImageItem = ({ imageInfo }) => (
  <ImageListItem>
    {imageInfo.media && imageInfo.media.m ? (
      <img src={imageInfo.media.m} alt={imageInfo.title} />
    ) : (
      <div>NO IMAGE</div>
    )}
    <ImageListItemBar title={imageInfo.title} />
  </ImageListItem>
);

const ImageItemMemo = memo(ImageItem);
export default ImageItemMemo;
