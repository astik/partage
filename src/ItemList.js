import { Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Tabletop from 'tabletop';
import ItemDisplay from './ItemDisplay';
import Spinner from './Spinner';

const useStyles = makeStyles((theme) => ({
	container: {
		padding: theme.spacing(2),
	},
	gridItem: {
		display: 'flex',
	},
}));

function ItemList({ searchValue }) {
	const [itemList, setItemList] = useState();
	const [filteredItemList, setFilteredItemList] = useState();
	useEffect(() => {
		async function fetchData() {
			try {
				let sheetData = await Tabletop.init({
					key: process.env.REACT_APP_SPREADSHEET_URL,
					simpleSheet: true,
				});
				console.log('blo');
				sheetData = sheetData.map((item, i) => {
					const {
						Catégorie: category,
						Nom: name,
						...potentialOwnersData
					} = item;
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
			} catch (error) {
				// inspired by https://github.com/facebook/react/issues/14981#issuecomment-468460187
				setFilteredItemList(() => {
					throw error;
				});
			}
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

export default ItemList;
