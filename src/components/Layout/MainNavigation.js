import Link from 'next/link';
import Logo from '@/components/Layout/Logo';

import styles from '@/styles/Layout/MainNavigation.module.css';

const headerLinks = [
	{ link: '/posts', title: 'Posts' },
	{ link: '/contacts', title: 'Contacts' },
];

function MainNavigation() {
	return (
		<header className={styles.header}>
			<Link href='/'>
				<Logo />
			</Link>
			<nav>
				<ul>
					{headerLinks.map((headerLink) => (
						<li key={headerLink.title}>
							<Link href={headerLink.link}>{headerLink.title}</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
