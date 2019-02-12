import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function Progress(props: any) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <LinearProgress color="secondary" />
    </div>
  );
}

Progress.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Progress);
