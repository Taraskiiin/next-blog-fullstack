import MainNavigation from '@/components/Layout/MainNavigation';

function Layout(props) {
	return (
		<>
			<MainNavigation />
			<main>{props.children}</main>
		</>
	);
}

export default Layout;
