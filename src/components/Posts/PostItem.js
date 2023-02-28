import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/components/Posts/PostItem.module.css';

function PostItem({ title, image, excerpt, date, slug }) {
	const formattedDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	const imagePath = `@/assets/images/posts/${slug}/${image}`;
	const linkPath = `/posts/${slug}`;

	return (
		<li className={styles.post}>
			<Link href={linkPath}>
				<div className={styles.image}>
					<Image
						href={imagePath}
						alt={`${title} image`}
						width={300}
						height={200}
						layout='responsive'
					/>
				</div>
				<div className={styles.content}>
					<h3>{title}</h3>
					<time>{formattedDate}</time>
					<p>{excerpt}</p>
				</div>
			</Link>
		</li>
	);
}

export default PostItem;
