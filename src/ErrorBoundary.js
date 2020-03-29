// taken from https://fr.reactjs.org/docs/error-boundaries.html
import React from 'react';

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		// Mettez à jour l'état, de façon à montrer l'UI de repli au prochain rendu.
		console.error('getDerivedStateFromError', error);
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		// Vous pouvez aussi enregistrer l'erreur au sein d'un service de rapport.
		console.error('componentDidCatch', error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return <h1>Erreur ... désolé ...</h1>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
