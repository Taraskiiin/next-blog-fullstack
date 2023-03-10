import ReactDOM from 'react-dom';
import styles from '@/styles/UI/Notification.module.css';

function Notification(props) {
	const { title, message, status } = props;

	let statusClasses = '';

	if (status === 'success') {
		statusClasses = styles.success;
	}

	if (status === 'error') {
		statusClasses = styles.error;
	}

	if (status === 'pending') {
		statusClasses = styles.pending;
	}

	const activeClasses = `${styles.notification} ${statusClasses}`;

	return ReactDOM.createPortal(
		<div className={activeClasses}>
			<h2>{title}</h2>
			<p>{message}</p>
		</div>,
		document.getElementById('notifications')
	);
}

export default Notification;
