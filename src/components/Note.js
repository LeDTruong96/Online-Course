import React, { useState, useEffect, useContext } from 'react';
import NotesContext from '../context/NotesContext';
import useGetPosMouse from '../hooks/MousePos';

const Note = ({ note }) => {
	const { dispatch } = useContext(NotesContext);
	const position = useGetPosMouse();

	const removeNote = (title) => {
		dispatch({ type: 'REMOVE_NOTE', title });
	};

	return (
		<div>
			<h3>title: {note.title}</h3>
			<p>content: {note.body}</p>
			<p>
				{position.x} - {position.y}
			</p>
			<button onClick={() => removeNote(note.title)}>x</button>
		</div>
	);
};

export { Note as default };
