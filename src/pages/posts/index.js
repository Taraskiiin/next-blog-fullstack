import { getAllPosts } from '@/utils/PostsUtil';
import AllPosts from '@/components/Posts/AllPosts';

function AllPostsPage(props) {
	return (
		<>
			<AllPosts posts={props.posts} />
		</>
	);
}

export function getStaticProps() {
	const allPosts = getAllPosts();

	return {
		props: {
			posts: allPosts,
		},
	};
}

export default AllPostsPage;
