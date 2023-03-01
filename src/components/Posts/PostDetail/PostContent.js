import ReactMarkdown from 'react-markdown';
import PostHeader from '@/components/Posts/PostDetail/PostHeader';

import styles from '@/styles/components/Posts/PostDetail/PostContent.module.css';

function PostContent({ post }) {
	const imagePath = `/assets/projects/${post.image}`;
	console.log(imagePath);
	return (
		<article className={styles.content}>
			<PostHeader title={post.title} image={imagePath} />
			<ReactMarkdown>{post.content}</ReactMarkdown>
		</article>
	);
}

export default PostContent;
