import React from 'react';
import {
	Card,
	CardContent,
	Typography,
	makeStyles,
	fade,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		flex: 1,
		background: fade(theme.palette.info.light, 0.15),
	},
	title: {
		fontSize: 14,
	},
}));

function ItemDisplay({ item }) {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography
					className={classes.title}
					color="textSecondary"
					gutterBottom
				>
					{item.category}
				</Typography>
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
