import PostItem from '@/components/Posts/PostItem';

import styles from '@/styles/components/Posts/PostsGrid.module.css';

function PostsGrid(props) {
	const { posts } = props;
	return (
		<ul className={styles.grid}>
			{posts?.map((post) => (
				<PostItem key={post.slug} {...post} />
			))}
		</ul>
	);
}

export default PostsGrid;
