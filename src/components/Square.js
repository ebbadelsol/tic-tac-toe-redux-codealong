import React from "react";
import { useDispatch } from "react-redux";
import { game } from "reducers/game";
import { Player } from "components/Player";

export const Square = ({ value, index }) => {
	const dispatch = useDispatch(); // This initialize dispatch and it doesn't require any arguments. This allows us to trigger things in within our store. Within our Redux store we can now dispatch actions.

	const handleClick = () => {
		dispatch(game.actions.captureSquare({ index }));
	};

	return (
		<button className={value === null ? "square clickable" : "square"} type="button" onClick={handleClick}>
			<Player value={value} />
		</button>
	);
};

// We need to dispatch an action when a square is clicked
