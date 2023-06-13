import RowActions from '../state-and-props/RowActions';

export default {
  component: RowActions,
};

const Template = (args) => <RowActions {...args} />;

export const Default = Template.bind({});

export const EditingActive = Template.bind({});
EditingActive.args = {
  editing: true,
};
