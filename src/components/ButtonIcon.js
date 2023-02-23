import VideoIcon from '../assets/icons/video.svg';
import PlayIcon from '../assets/icons/play.svg';
import { useContext, useRef, useState } from 'react';
import { AppContext } from '../context/appContext';

export const ButtonsVideoController = ({ setVideoPath }) => {
	const [ video, setVideo ] = useState();
	const inputRef = useRef();
	const context = useContext(AppContext);

	const handleSetVideoPath = (file) => {
		setVideo(file.path);
		setVideoPath(file.path);
		context.setPath(file.path);
	};

	return (
		<div className="video-buttons">
			{video && <p className="video-path">{video}</p>}

			<div className="image-upload-wrap">
				<button className="video-button">
					<img src={VideoIcon} className="button-icon" alt="" />
					<input
						className="file-upload-input"
						type="file"
						onChange={() => handleSetVideoPath(inputRef.current.files[0])}
						accept="video/mp4,video/x-m4v,video/*"
						ref={inputRef}
					/>
					Espisódio Completo
				</button>
			</div>

			{/* <button className="video-button">
				<img src={FolderIcon} className="button-icon" alt="" />
				Pasta de Cortes
			</button> */}

			<button className="video-button">
				<img src={PlayIcon} className="button-icon" alt="" />
				Gerar Cortes
			</button>
		</div>
	);
};
