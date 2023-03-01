import { useRef } from 'react';

import styles from '@/styles/Contact/ContactForm.module.css';

function ContactForm() {
	const inputEmailRef = useRef();
	const inputNameRef = useRef();
	const inputMessageRef = useRef();

	function sendMessageHandler(event) {
		event.preventDefault();

		const email = inputEmailRef?.current.value;
		const name = inputNameRef?.current.value;
		const message = inputMessageRef?.current.value;

		const body = JSON.stringify({ email, name, message });
		fetch('/api/contact', {
			method: 'POST',
			body: body,
			headers: {
				'content-type': 'application/json',
			},
		});
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
		</section>
	);
}

export default ContactForm;
