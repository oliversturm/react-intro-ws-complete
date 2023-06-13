import ImageItem from '../components1/ImageItem';

export default {
  component: ImageItem,
};

const Template = (args) => <ImageItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageInfo: {
    // media: { m: '...' },
    title: 'This is the title',
  },
};
