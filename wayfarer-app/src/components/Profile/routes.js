import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProfileMain from './ProfileMain/ProfileMain';
import ProfileForm from './ProfileForm/ProfileForm';
import MyPosts from './MyPosts/MyPosts';

const Routes = props => {
  return (
    <Switch>
      <Route
        path='/profile/edit'
        render={() => (
          <ProfileForm profile={props.profile} updateUser={props.updateUser} />
        )}
      />
      <Route
        path='/profile/myposts'
        render={() => (
          <MyPosts profile={props.profile} posts={props.posts} updateUserPosts={props.updateUserPosts} />
        )}
      />
      <Route
        path='/profile'
        render={() => (
          <ProfileMain profile={props.profile} />
        )}
      />
    </Switch>
  )
}

export default Routes;
