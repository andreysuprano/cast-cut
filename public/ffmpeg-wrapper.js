const ffmpeg = require('fluent-ffmpeg');

const ffmpegPath = require('ffmpeg-static').replace('app.asar', 'app.asar.unpacked');

const ffprobePath = require('ffprobe-static').path.replace('app.asar', 'app.asar.unpacked');

ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);

const trimVideo = (event, start, stop, videoPath, videoIndex) => {
	const stopArray = stop.split(':');
	const startArray = start.split(':');
	const startTime = toSeconds(startArray[0], startArray[1], startArray[2]);
	const stopTime = toSeconds(stopArray[0], stopArray[1], stopArray[2]);

	const totalTime = stopTime - startTime;

	return new Promise((resolve, reject) => {
		ffmpeg({ source: videoPath })
			.setStartTime(start)
			.duration(stop)
			.on('start', () => {
				console.log(`____________ START ${videoIndex + 1} PROCCESS __________`);
			})
			.on('progress', (progress) => {
				const time = parseInt(progress.timemark.replace(/:/g, ''));
				const percent = time / totalTime * 100;
				console.log(`Processing ${percent}%.`);
			})
			.on('error', (err) => {
				reject(err);
			})
			.on('end', () => {
				console.log('____________ END PROCCESS __________');
				resolve();
			})
			.saveToFile(`cut${videoIndex}.mp4`);
	});
};
function toSeconds(hours, minutes, seconds) {
	return hours * 3600 + minutes * 60 + seconds;
}
module.exports = trimVideo;
