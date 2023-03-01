import Image from 'next/image';

import styles from '@/styles/components/Posts/PostDetail/PostHeader.module.css';

function PostHeader({ title, image }) {
	return (
		<header className={styles.header}>
			<h1>{title}</h1>
			<Image src={image} alt={title} width={400} height={200} />
		</header>
	);
}

export default PostHeader;
