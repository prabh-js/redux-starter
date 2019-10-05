import React, { Fragment } from 'react';
import PostList from './PostList';

const App = () => {
    return (
    <Fragment>
        <div className="ui container">
        <PostList />
        </div>
    </Fragment>
    )
};

export default App;