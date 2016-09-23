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

const getToken = () => {
  return Math.random().toString(36).substring(7);
}

export const handleSignup = (first_name, last_name, username, email, password, redirect, history) => {
  return(dispatch) => {
    $.ajax({
      url: '/users',
      type: 'POST',
      data: { user: { first_name, last_name, username, email, password }},
      dataType: 'JSON'
    }).done( user => {
      let { id } = user;
      let api_key = getToken();
      localStorage.setItem('apiKey', api_key);
      localStorage.setItem('userId', id);
      dispatch(loggedIn(id, api_key));
      history.push(redirect);
    }).fail( res => {
      console.log(res);
    });
  }
}

// add first_name, last_name, username
export const handleLogin = (email, password, redirect, history) => {
  return(dispatch) => {
    $.ajax({
      url: '/users/sign_in',
      type: 'POST',
      data: { user: { email, password }},
      dataType: 'JSON'
    }).done( user => {
      let { id } = user;
      let api_key = getToken();
      localStorage.setItem('apiKey', api_key);
      localStorage.setItem('userId', id);
      dispatch(loggedIn(id, api_key));
      history.push('/');
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
