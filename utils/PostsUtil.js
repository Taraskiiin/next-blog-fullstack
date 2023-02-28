import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsPath = path.join(process.cwd(), 'posts');

function getPostData(fileName) {
	const filePath = path.join(postsPath, fileName);
	const fileContent = fs.readFileSync(filePath, 'utf-8');
	const { data, content } = matter(fileContent);

	const postData = {};
}

function getAllPosts() {
	const postsFiles = fs.readFileSync(postsPath);
}
