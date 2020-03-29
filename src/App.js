import React, { useState } from 'react';
import ErrorBoundary from './ErrorBoundary';
import ItemList from './ItemList';
import SearchBar from './SearchBar';

function App() {
	const [searchValue, setSearchValue] = useState('');
	return (
		<ErrorBoundary>
			<SearchBar handleSearch={setSearchValue} />
			<ItemList searchValue={searchValue} />
		</ErrorBoundary>
	);
}

export default App;
