import React, { useContext } from 'react';
import Note from './Note';
import NotesContext from '../context/NotesContext';

const NoteList = () => {
	const { notes } = useContext(NotesContext);

	return (
		<div>
			{notes.map((note) => {
				return <Note key={note.title} note={note} />;
			})}
		</div>
	);
};

export { NoteList as default };
