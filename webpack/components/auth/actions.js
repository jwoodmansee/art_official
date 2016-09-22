export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}

export const loggedIn = (id, apiKey) => {
  return {
    type: 'LOGIN',
    id,
    apiKey
  }
}

// add first_name, last_name, username
export const handleLogin = (email, password, redirect, history) => {
  return(dispatch) => {
    $.ajax({
      url: '/user/sign_in',
      type: 'POST',
      data: { user: { email, passoword }},
      dataType: 'JSON'
    }).done( user => {
      let { api_key, id } = user;
      localStorage.setItem('apiKey', api_Key);
      localStorage.setItem('userId', id);
      dispatch(loggedIn(id, api_key));
      history.push(redirect);
    }).fail( res => {
      //TODO show something on page
    });
  }
}

export const handleLogout = (history) => {
  return(dispatch) => {
    $.ajax({
      url: '/users/sign_out',
      type: 'DELETE',
      dataType: 'JSON'
    }).done( () => {
      localStorage.removeItem('apiKey');
      localStorage.removeItem('userId');
      dispatch(logout());
      history.push('/');
    }).fail( )
  }
}
