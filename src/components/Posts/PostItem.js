import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/Posts/PostItem.module.css';

function PostItem({ title, image, stack, slug }) {
	const imagePath = `/assets/projects/${image}`;
	const linkPath = `/posts/${slug}`;

	return (
		<li className={styles.post}>
			<Link href={linkPath}>
				<div className={styles.image}>
					<Image
						src={imagePath}
						alt={`${title} image`}
						width={300}
						height={200}
						layout='responsive'
					/>
				</div>
				<div className={styles.content}>
					<h3>{title}</h3>
					<p>{stack}</p>
				</div>
			</Link>
		</li>
	);
}

export default PostItem;
