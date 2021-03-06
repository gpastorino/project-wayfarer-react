import React from 'react';

import CityHeader from './CityHeader/CityHeader';
import PostList from '../../PostList/PostList';

const CityMain = (props) => {
  return(
    <div className="container d-flex flex-column justify-content-center align-items-center">
    <CityHeader currentCity={props.currentCity} currentCityName={props.currentCityName} />
    <PostList currentCity={props.currentCity} posts={props.posts} updatePosts={props.updateCityPosts} />
    </div>
  );
};

export default CityMain;
