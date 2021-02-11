import React, { useState, useContext } from 'react';
import NotesContext from '../context/NotesContext';

const NoteForm = () => {
	const { dispatch } = useContext(NotesContext);
	const [ title, setTitle ] = useState('');
	const [ body, setBody ] = useState('');

	const addNote = (e) => {
		e.preventDefault();
		dispatch({ type: 'ADD_NOTE', note: { title, body } });
		setTitle('');
		setBody('');
	};

	return (
		<div>
			<p>Add Note</p>
			<form onSubmit={addNote}>
				<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
				<input type="textarea" value={body} onChange={(e) => setBody(e.target.value)} />
				<button onClick={addNote}>Submit</button>
			</form>
		</div>
	);
};

export { NoteForm as default };
