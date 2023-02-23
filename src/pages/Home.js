import { useEffect, useState } from 'react';
import { ButtonsVideoController } from '../components/ButtonIcon';
import { Header } from '../components/Header';
import { CutTable } from '../components/CutTable';
import { CutSetTime } from '../components/CutSetTime';

const Home = () => {
	const [ cortes, setCortes ] = useState([]);
	const [ videoPath, setVideoPath ] = useState('');
	const [ object, setObject ] = useState({});

	useEffect(
		() => {
			setObject({
				cortes,
				videoPath
			});
			console.log(object);
		},
		[ cortes, videoPath ]
	);

	const handleVideoPath = (path) => {
		setVideoPath(path);
	};

	const handleCorte = (cut) => {
		cortes.push(cut);
		setCortes([ ...cortes ]);
	};

	const handleRemoveCorte = (index) => {
		console.log(index);
		cortes.splice(index, 1);
		console.log(cortes);
		setCortes([ ...cortes ]);
	};

	function handleButtonClick() {
		window.api.test('Bora caraio');
	}

	return (
		<div className="home">
			<div className="top-bar">
				<div>
					<button className="close-button" />
					<button className="maximize-button" />
					<button className="minimize-button" />
				</div>
			</div>
			<div className="card">
				<div className="circle" />
				<div className="circle" />
				<div className="card-inner" />
			</div>
			<Header />
			<div className="content">
				<div className="container">
					<ButtonsVideoController setVideoPath={handleVideoPath} />
					<CutSetTime addCortes={handleCorte} />
				</div>
			</div>
			<CutTable cortes={cortes} removeCorte={handleRemoveCorte} />
			<div className="credits">
				<p>Develop by @SupranoDigital Version 1.0.10</p>
			</div>
		</div>
	);
};

export default Home;
