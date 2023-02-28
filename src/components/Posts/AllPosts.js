import PostsGrid from '@/components/Posts/PostsGrid';
import styles from '@/styles/components/Posts/AllPosts.module.css';

const mockPosts = [
	{
		slug: 'mock-slug1',
		title: 'mock-title',
		image: 'mock-image',
		excerpt: 'mock-excerpt',
		date: '2023-02-28',
	},
	{
		slug: 'mock-slug2',
		title: 'mock-title',
		image: 'mock-image',
		excerpt: 'mock-excerpt',
		date: '2023-02-28',
	},
	{
		slug: 'mock-slug3',
		title: 'mock-title',
		image: 'mock-image',
		excerpt: 'mock-excerpt',
		date: '2023-02-28',
	},
	{
		slug: 'mock-slug4',
		title: 'mock-title',
		image: 'mock-image',
		excerpt: 'mock-excerpt',
		date: '2023-02-28',
	},
];

function AllPosts(props) {
	return (
		<section className={styles.posts}>
			<h1>All Posts</h1>
			<PostsGrid posts={mockPosts} />
		</section>
	);
}

export default AllPosts;
