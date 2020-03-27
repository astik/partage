import React from 'react';
import {
	Card,
	CardContent,
	Typography,
	makeStyles,
	fade,
} from '@material-ui/core';
import BuildIcon from '@material-ui/icons/Build';
import HomeIcon from '@material-ui/icons/Home';
import KitchenIcon from '@material-ui/icons/LocalDining';
import BabyIcon from '@material-ui/icons/ChildFriendly';

const useStyles = makeStyles((theme) => ({
	root: {
		flex: 1,
		background: fade(theme.palette.info.light, 0.15),
		position: 'relative',
	},
	categoryIcon: {
		position: 'absolute',
		right: theme.spacing(2),
		bottom: theme.spacing(2),
		fontSize: '400%',
		color: fade(theme.palette.info.light, 0.45),
		zIndex: -1,
	},
}));

const icons = {
	Bricolage: BuildIcon,
	Cuisine: KitchenIcon,
	Maison: HomeIcon,
	Puericulture: BabyIcon,
};

function ItemDisplay({ item }) {
	const classes = useStyles();
	const CategoryIcon = icons[item.category];
	return (
		<Card className={classes.root}>
			<CardContent>
				<CategoryIcon className={classes.categoryIcon} />
				<Typography variant="h5" component="h2">
					{item.name}
				</Typography>
				<ul>
					{item.owners.map((owner) => (
						<li key={owner}>{owner}</li>
					))}
				</ul>
			</CardContent>
		</Card>
	);
}

export default ItemDisplay;
