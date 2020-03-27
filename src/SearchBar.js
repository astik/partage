import {
	AppBar,
	InputBase,
	makeStyles,
	Toolbar,
	Typography,
	fade,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { useDebounce } from 'use-debounce';

const useStyles = makeStyles((theme) => ({
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	search: {
		flex: 1,
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
		width: '100%',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
}));

function SearchBar({ handleSearch = () => {} }) {
	const [searchValue, setSearchValue] = useState('');
	const [debouncedSearchValue] = useDebounce(searchValue, 250);
	useEffect(() => {
		handleSearch(debouncedSearchValue);
	}, [handleSearch, debouncedSearchValue]);
	const classes = useStyles();
	return (
		<AppBar position="sticky">
			<Toolbar>
				<Typography className={classes.title} variant="h6" noWrap>
					Partage
				</Typography>
				<div className={classes.search}>
					<div className={classes.searchIcon}>
						<SearchIcon />
					</div>
					<InputBase
						placeholder="Rechercher …"
						classes={{
							root: classes.inputRoot,
							input: classes.inputInput,
						}}
						inputProps={{ 'aria-label': 'Recherche' }}
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
					/>
				</div>
			</Toolbar>
		</AppBar>
	);
}

export default SearchBar;
