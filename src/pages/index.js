import Hero from '@/components/Home/Hero';
import FeaturedPosts from '@/components/Home/FeaturedPosts';

const mockPosts = [
	{
		slug: 'mock-slug1',
		title: 'mock-title',
		image: 'mock-image',
		excerpt: 'mock-excerpt',
		date: '2023-02-28',
	},
	{
		slug: 'mock-slug2',
		title: 'mock-title',
		image: 'mock-image',
		excerpt: 'mock-excerpt',
		date: '2023-02-28',
	},
	{
		slug: 'mock-slug3',
		title: 'mock-title',
		image: 'mock-image',
		excerpt: 'mock-excerpt',
		date: '2023-02-28',
	},
	{
		slug: 'mock-slug4',
		title: 'mock-title',
		image: 'mock-image',
		excerpt: 'mock-excerpt',
		date: '2023-02-28',
	},
];

function HomePage() {
	return (
		<>
			<Hero />
			<FeaturedPosts posts={mockPosts} />
		</>
	);
}

export default HomePage;
