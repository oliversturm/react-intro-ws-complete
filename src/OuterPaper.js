import { Paper, styled } from '@mui/material';

const OuterPaper = styled(Paper)(({ theme }) => ({
  margin: theme.spacing(2),
  padding: theme.spacing(2),
}));

export default OuterPaper;
