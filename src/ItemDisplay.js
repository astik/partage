import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		flex: 1,
	},
	title: {
		fontSize: 14,
	},
});

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
			</CardContent>
		</Card>
	);
}

export default ItemDisplay;
