import Head from 'next/head';

import Hero from '@/components/Home/Hero';
import FeaturedPosts from '@/components/Home/FeaturedPosts';
import { getFeaturedPosts } from '@/utils/PostsUtil';

function HomePage(props) {
	return (
		<>
			<Head>
				<title>Taraskiiin home</title>
				<meta name='description' content='sharing my pet-projects' />
			</Head>
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
