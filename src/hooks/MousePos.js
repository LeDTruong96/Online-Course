import React, { useState, useEffect } from 'react';

const useGetPosMouse = () => {
	const [ position, setPosition ] = useState({ x: 0, y: 0 });
	const onSetMousePos = (e) => {
		setPosition({
			x: e.pageX,
			y: e.pageY
		});
	};

	useEffect(() => {
		document.addEventListener('mousemove', onSetMousePos);

		return () => {
			document.removeEventListener('mousemove', onSetMousePos);
		};
	}, []);

	return position;
};

export { useGetPosMouse as default };
