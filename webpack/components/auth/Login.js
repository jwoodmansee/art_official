let location = this.props.location.query.redirect;
let redirectLocation = location ? location : '/';
this.state = { error: false, redirectRoute: redirectLocation }
