import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsPath = path.join(process.cwd(), 'posts');

function getPostData(fileName) {
	const filePath = path.join(postsPath, fileName);
	const fileContent = fs.readFileSync(filePath, 'utf-8');
	const { data, content } = matter(fileContent);
	const postSlug = fileName.replace(/\.md$/, '');
	const postData = {
		slug: postSlug,
		...data,
		content,
	};

	return postData;
}

function getAllPosts() {
	const postFiles = fs.readFileSync(postsPath);
	const allPosts = postFiles.map((postFile) => {
		return getPostData(postFile);
	});

	const sortedPosts = allPosts.sort((postA, postB) =>
		postA.date > postB.date ? -1 : 1
	);
	return sortedPosts;
}
