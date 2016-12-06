import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Notification from './notification';
import transitions from './transitions.css';
import {removeAllNotificationsAction} from '../../store/actions';

const mapStateToProps = state => ({
  notifications: state.notifications,
  thereAreNotifications: state.notifications.length !== 0,
});

const mapDispatchToProps = dispatch => ({
  onRemoveAllNotificationsClick: () => dispatch(removeAllNotificationsAction()),
});

const Notifications = ({notifications, onRemoveAllNotificationsClick, thereAreNotifications}) => (
  <div>
    <ReactCSSTransitionGroup
      transitionName={transitions}
      transitionEnterTimeout={700}
      transitionLeaveTimeout={700}>
      {
        notifications.map(notification => (
          <Notification key={notification.id} notification={notification} />
        ))
      }
    </ReactCSSTransitionGroup>
    {
      thereAreNotifications ?
        <button className="btn btn-default" onClick={() => onRemoveAllNotificationsClick()}>
          Clear notifications
        </button> : ''
    }
  </div>
);

Notifications.propTypes = {
  notifications: PropTypes.array.isRequired,
  onRemoveAllNotificationsClick: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
