/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const ColorPicker = () => {
	const [color, setColor] = useState('#000000');

	const handleColorChange = (e) => {
		setColor(e.target.value);
	};
	return (
		<div className='flex flex-col items-center justify-center gap-y-4 py-10'>
			<h1 className='font-bold text-4xl' style={{ color: color }}>
				Color Picker
			</h1>

			<p>Selected Color: {color}</p>
			<div className='w-80 h-80 rounded-2xl duration-500 shadow-lg' style={{ backgroundColor: color }}></div>

			<label>
				Select a color:
				<input type='color' value={color} onChange={handleColorChange} className='ml-2' />
			</label>
		</div>
	);
};

export default ColorPicker;
