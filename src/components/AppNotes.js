import React, { useEffect, useReducer, useState } from 'react';
import notesReducer from '../reducers/notes';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import NotesContext from '../context/NotesContext';
import useGetPosMouse from '../hooks/MousePos';

const AppNotes = (props) => {
	const [ notes, dispatch ] = useReducer(notesReducer, []);
	const position = useGetPosMouse();

	useEffect(() => {
		const notes = JSON.parse(localStorage.getItem('notes')) || [];
		dispatch({ type: 'POPULATE_NOTES', notes });
	}, []);

	useEffect(
		() => {
			localStorage.setItem('notes', JSON.stringify(notes));
		},
		[ notes ]
	);

	return (
		<NotesContext.Provider value={{ notes, dispatch }}>
			<h1>NOTES</h1>
			<p>
				{position.x} - {position.y}
			</p>
			<NoteList />
			<NoteForm />
		</NotesContext.Provider>
	);
};

export { AppNotes as default };
