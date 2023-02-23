import { useState } from 'react';
import CutIcon from '../assets/icons/cut.svg';

export const CutSetTime = ({ addCortes }) => {
	const [ startTime, setStartTime ] = useState();
	const [ endTime, setEndTime ] = useState();

	const handleCut = () => {
		if (startTime && endTime) {
			addCortes({ start: startTime, end: endTime });
		} else {
			alert('Preencha o perído do corte!');
		}
	};

	const inputMask = (text) => {
		return text
			.replace(/\D/g, '')
			.replace(/(\d{2})(\d)/, '$1:$2')
			.replace(/(\d{2})(\d)/, '$1:$2')
			.replace(/(\d{2})(\d{1,2})/, '$1-$2');
	};

	return (
		<div className="cut-add-box">
			<p>Tempo de Início</p>
			<div className="input-time">
				<input
					type="text"
					name="text"
					className="input"
					placeholder="HH:MM:SS"
					onChange={(e) => setStartTime(inputMask(e.target.value))}
					value={startTime}
					maxLength={8}
				/>
			</div>
			<p>Tempo de Final</p>
			<div className="input-time">
				<input
					type="text"
					name="text"
					className="input"
					placeholder="HH:MM:SS"
					onChange={(e) => setEndTime(inputMask(e.target.value))}
					value={endTime}
					maxLength={8}
				/>
			</div>
			<button className="cut-button" onClick={handleCut}>
				<img src={CutIcon} className="cut-button-icon" alt="" />
			</button>
		</div>
	);
};
