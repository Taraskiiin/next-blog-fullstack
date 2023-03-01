import Head from 'next/head';
import { getAllPosts } from '@/utils/PostsUtil';
import AllPosts from '@/components/Posts/AllPosts';

function AllPostsPage(props) {
	return (
		<>
			<Head>
				<title>All posts</title>
				<meta name='description' content='A list of my pet-projects' />
			</Head>
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
