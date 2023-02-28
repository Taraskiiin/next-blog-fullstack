import styles from '@/styles/components/Posts/PostHeader.module.css';
import Image from 'next/image';

import styles from '@/styles/components/Posts/PostDetail/PostHeader.module.css';

function PostHeader({ title, image }) {
	return (
		<header className={styles.header}>
			<h1>{title}</h1>
			<Image src={image} alt={title} width={200} height={150} />
		</header>
	);
}

export default PostHeader;
