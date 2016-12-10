// npm packages
import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const Profile = ({user}) => {

  return (
    <div className="jumbotron">
      <h2>User:</h2>
      <p>{user.login}</p>
      <h2>Here since:</h2>
      <p>{user.registrationDate}</p>
    </div>
  );
};

export default connect(mapStateToProps, null)(Profile);
