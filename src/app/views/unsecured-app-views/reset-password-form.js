//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {handleResetPassword} from "../../controllers/login-controller";
import {textValueChanged} from "../../util/web-forms-data-collection-utils";

export default function ResetPasswordForm(props) {

  let {resetPasswordModel, toastNotificationAlert} = props;

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  const classes = useStyles();

  return (
      <React.Fragment>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
              id="username-or-email"
              label="Username/Email" type={'text'}
              onChange={text => textValueChanged(resetPasswordModel, text, 'usernameOrEmail')}
          />
          <br/>
          <TextField
              id="password"
              label="New Password" type={'password'}
              onChange={text => textValueChanged(resetPasswordModel, text, 'password')}
          />
          <br/>
          <TextField
              id="confirmPassword"
              label="Confirm Password" type={'password'}
              onChange={text => textValueChanged(resetPasswordModel, text, 'confirmPassword')}
          />
          <br/>
          <Button
              variant="contained"
              color="primary" type={'submit'}
              onClick={e => {
                e.preventDefault();
                handleResetPassword(toastNotificationAlert);
              }}
          >
            Reset Password
          </Button>
        </form>
      </React.Fragment>
  )
}
