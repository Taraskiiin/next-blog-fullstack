import Head from 'next/head';
import ContactForm from '@/components/Contact/ContactForm';

function ContactPage() {
	return (
		<>
			<Head>
				<title>Be in touch</title>
				<meta name='description' content='send me your message' />
			</Head>
			<ContactForm />
		</>
	);
}

export default ContactPage;
