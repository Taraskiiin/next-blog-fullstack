import Image from 'next/image';
import myPhoto from '@/assets/taraskiiin.jpg';

import styles from '@/styles/components/Home/Hero.module.css';
function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.image}>
				<Image
					src={myPhoto}
					alt='An image showing Me'
					width={500}
					height={500}
				/>
			</div>
			<h1>Hello, I'm Taras</h1>
			<p>This blog about web development.</p>
		</section>
	);
}

export default Hero;
