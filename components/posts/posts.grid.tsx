function PostsGrid(props: {posts: [{title: string, body: string}]}) {
    const {posts} = props;

    return <ul>{posts.map((post) => <PostItem>)}</ul>
}

export default PostsGrid