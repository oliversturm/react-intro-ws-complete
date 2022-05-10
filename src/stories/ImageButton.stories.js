import CancelImage from '../state-and-props/CancelImage';
import ImageButton from '../state-and-props/ImageButton';
import SaveImage from '../state-and-props/SaveImage';

export default {
  component: ImageButton,
};

const Template = (args) => <ImageButton {...args}>{args.text}</ImageButton>;

export const Default = Template.bind({});
Default.args = {
  text: 'Button text',
};

export const CancelButton = Template.bind({});
CancelButton.args = {
  text: 'Cancel',
  ImageComponent: CancelImage,
};

export const SaveButton = Template.bind({});
SaveButton.args = {
  text: 'Save',
  ImageComponent: SaveImage,
};
