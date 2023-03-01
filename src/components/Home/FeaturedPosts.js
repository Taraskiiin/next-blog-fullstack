import PostsGrid from '@/components/Posts/PostsGrid';

import styles from '@/styles/Home/FeaturedPosts.module.css';

function FeaturedPosts(props) {
	return (
		<section className={styles.latest}>
			<h2>Featured Posts</h2>
			<PostsGrid posts={props.posts} />
		</section>
	);
}

export default FeaturedPosts;
