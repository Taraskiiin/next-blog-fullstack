import Image from 'next/image';

import styles from '@/styles/Posts/PostDetail/PostHeader.module.css';

function PostHeader({ title, image, demo }) {
	return (
		<header className={styles.header}>
			<div>
				<h3>{title}</h3>
				<a href={demo} target='_blank'>
					Demo
				</a>
			</div>
			<Image src={image} alt={title} width={400} height={200} />
		</header>
	);
}

export default PostHeader;
