import Hero from '@/components/Home/Hero';
import FeaturedPosts from '@/components/Home/FeaturedPosts';
import { getFeaturedPosts } from '@/utils/PostsUtil';

function HomePage(props) {
	return (
		<>
			<Hero />
			<FeaturedPosts posts={props.posts} />
		</>
	);
}

export async function getStaticProps() {
	const featuredPosts = getFeaturedPosts();

	return {
		props: {
			posts: featuredPosts,
		},
	};
}

export default HomePage;
