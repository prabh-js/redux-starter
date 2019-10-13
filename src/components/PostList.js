import React from 'react';
import { connect } from 'react-redux';
import UserHeader from './UserHeader';
import { fetchPostsAndUsers } from '../actions';

class PostList extends React.Component {
    componentDidMount() {
        console.log(this.props.fetchPostsAndUsers());
    }
    renderPostList = () => {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId}/>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="ui relaxed divided list">{this.renderPostList()}</div>
        )
    }
}
const mapStateToProps = (state) => {
   return { posts: state.posts }
}
const mapDispatchToProps = {
    fetchPostsAndUsers,  
}
export default connect(mapStateToProps, mapDispatchToProps)(PostList);