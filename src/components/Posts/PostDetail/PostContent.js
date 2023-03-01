import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import PostHeader from '@/components/Posts/PostDetail/PostHeader';

import styles from '@/styles/Posts/PostDetail/PostContent.module.css';

function PostContent({ post }) {
	const imagePath = `/assets/projects/${post.image}`;

	const customRenderers = {
		paragraph(paragraph) {
			const { node } = paragraph;

			if (node.children[0].type === 'image') {
				const image = node.children[0];

				return (
					<div className={styles.image}>
						<Image
							src={`/assets/${image.url}`}
							alt={image.alt}
							width={250}
							height={250}
						/>
					</div>
				);
			}

			return <p>{paragraph.children}</p>;
		},

		code(code) {
			const { language, value } = code;
			return (
				<SyntaxHighlighter
					style={atomDark}
					language={language}
					children={value}
				/>
			);
		},
	};
	return (
		<article className={styles.content}>
			<PostHeader title={post.title} image={imagePath} />
			<ReactMarkdown renderers={customRenderers} children={post.content} />
		</article>
	);
}

export default PostContent;
