import { Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Tabletop from 'tabletop';
import ItemDisplay from './ItemDisplay';
import SearchBar from './SearchBar';
import Spinner from './Spinner';

const useStyles = makeStyles((theme) => ({
	container: {
		padding: theme.spacing(2),
	},
	gridItem: {
		display: 'flex',
	},
}));

function App() {
	const [searchValue, setSearchValue] = useState('');
	const [itemList, setItemList] = useState();
	const [filteredItemList, setFilteredItemList] = useState();
	useEffect(() => {
		async function fetchData() {
			let sheetData = await Tabletop.init({
				key: process.env.REACT_APP_SPREADSHEET_URL,
				simpleSheet: true,
			});
			sheetData = sheetData.map((item, i) => {
				const { Catégorie: category, Nom: name, ...potentialOwnersData } = item;
				const owners = Object.entries(potentialOwnersData)
					.filter(([_, quantity]) => !!quantity)
					.map(([owner, _]) => owner);
				return {
					id: i,
					category,
					name,
					search: category.toLowerCase() + ' ' + name.toLowerCase(),
					owners,
				};
			});
			setItemList(sheetData);
			setFilteredItemList(sheetData);
		}
		fetchData();
	}, []);
	useEffect(() => {
		!!itemList &&
			setFilteredItemList(
				itemList.filter((item) => item.search.includes(searchValue))
			);
	}, [itemList, searchValue]);
	const classes = useStyles();
	return (
		<>
			<SearchBar handleSearch={setSearchValue} />
			{!filteredItemList && <Spinner />}
			{!!filteredItemList && (
				<Grid container spacing={3} className={classes.container}>
					{filteredItemList.map((item) => (
						<Grid
							item
							key={item.id}
							className={classes.gridItem}
							xs={12}
							sm={6}
							md={4}
							lg={3}
							xl={2}
						>
							<ItemDisplay item={item} />
						</Grid>
					))}
				</Grid>
			)}
		</>
	);
}

export default App;
