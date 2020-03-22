import React, { useEffect } from 'react';
import Tabletop from 'tabletop';

function App() {
	useEffect(() => {
		async function fetchData() {
			const data = await Tabletop.init({
				key: process.env.REACT_APP_SPREADSHEET_URL,
				simpleSheet: true,
			});
			console.log(data);
		}
		fetchData();
	}, []);
	return <div>TODO</div>;
}

export default App;
