import ReactMarkdown from 'react-markdown';
import PostHeader from '@/components/Posts/PostDetail/PostHeader';

import styles from '@/styles/components/Posts/PostDetail/PostContent.module.css';

function PostContent() {
	return (
		<article className={styles.content}>
			<PostHeader title='title' image='/' />
			<ReactMarkdown># title</ReactMarkdown>
		</article>
	);
}

export default PostContent;
