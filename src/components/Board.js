import React from "react";
import { useSelector } from "react-redux";
import { Square } from "components/Square";

export const Board = () => {
	const squares = useSelector((store) => store.game.squares); // This function takes the entire store from Redux and returns store.game.square (Inplicit return that returns the array of squares).

	// With the useSelector Hook we can fetch anything from the state/store.

	return (
		<div className="board">
			{squares.map((value, index) => (
				<Square key={index} value={value} index={index} />
			))}
		</div>
	);
};
