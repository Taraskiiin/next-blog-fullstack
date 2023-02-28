import ReactMarkdown from 'react-markdown';
import PostHeader from '@/components/Posts/PostDetail/PostHeader';

import styles from '@/styles/components/Posts/PostDetail/PostContent.module.css';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const mockPost = { slug: '' };

function PostContent() {
	return (
		<article className={styles.content}>
			<PostHeader title='title' image='link' />
			<ReactMarkdown>{content}</ReactMarkdown>
		</article>
	);
}

export default PostContent;
