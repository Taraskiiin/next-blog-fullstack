import { useRef, useState, useEffect } from 'react';
import Notification from '@/components/UI/Notifications';
import styles from '@/styles/Contact/ContactForm.module.css';

async function sendContactData(body) {
	const response = await fetch('/api/contact', {
		method: 'POST',
		body: body,
		headers: {
			'content-type': 'application/json',
		},
	});

	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || 'something went wrong.');
	}
}

function ContactForm() {
	const inputEmailRef = useRef();
	const inputNameRef = useRef();
	const inputMessageRef = useRef();
	const [requestStatus, setRequestStatus] = useState();
	const [requestErrorMessage, setRequestErrorMessage] = useState();

	useEffect(() => {
		if (requestStatus !== 'pending') {
			const timer = setTimeout(() => {
				setRequestStatus(null);
				setRequestErrorMessage(null);
			}, 2000);

			return () => clearTimeout(timer);
		}
	}, [requestStatus]);

	async function sendMessageHandler(event) {
		event.preventDefault();

		setRequestStatus('pending');

		const email = inputEmailRef?.current.value;
		const name = inputNameRef?.current.value;
		const message = inputMessageRef?.current.value;

		const body = JSON.stringify({ email, name, message });

		try {
			await sendContactData(body);
			setRequestStatus('success');
		} catch (error) {
			setRequestErrorMessage(error.message);
			setRequestStatus('error');
		}
	}

	let notification = null;

	switch (requestStatus) {
		case 'pending':
			notification = {
				status: 'pending',
				title: 'sending message...',
				message: 'your message is on its way!',
			};
			break;
		case 'success':
			notification = {
				status: 'success',
				title: 'success!',
				message: 'message sent successfully',
			};
			break;
		case 'error':
			notification = {
				status: 'error',
				title: 'Error!',
				message: requestErrorMessage,
			};
			break;
		default:
			notification = null;
	}

	return (
		<section className={styles.contact}>
			<h1>How can I help you?</h1>
			<form className={styles.form} onSubmit={sendMessageHandler}>
				<div className={styles.controls}>
					<div className={styles.control}>
						<label htmlFor='email'>Your Email</label>
						<input type='email' id='email' required ref={inputEmailRef} />
					</div>
					<div className={styles.control}>
						<label htmlFor='name'>Your Name</label>
						<input type='text' id='name' required ref={inputNameRef} />
					</div>
				</div>
				<div className={styles.control}>
					<label htmlFor='message'>Your Message</label>
					<textarea
						type='text'
						id='message'
						rows='5'
						required
						ref={inputMessageRef}
					/>
				</div>
				<div className={styles.actions}>
					<button>Send Message</button>
				</div>
			</form>
			{notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			)}
		</section>
	);
}

export default ContactForm;
