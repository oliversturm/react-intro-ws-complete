import Calculator from '../calculator/Calculator';

export default {
  component: Calculator,
};

const Template = (args) => <Calculator {...args} />;

export const Default = Template.bind({});
