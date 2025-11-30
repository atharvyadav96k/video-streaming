const ffmpeg = require('fluent-ffmpeg');
const path = require('path');


exports.cutVideo = () => {
    const inputVideo = 'input.mp4';
    const outputVideo = 'cut_video.mp4';
    const startTime = '00:00:05';
    const duration = 10;

    ffmpeg(inputVideo)
        .setStartTime(startTime)
        .duration(duration)
        .output(outputVideo)
        .on('start', function (commandLine) {
            console.log('Spawned FFmpeg with command: ' + commandLine);
        })
        .on('end', function () {
            console.log('Video cutting finished successfully!');
        })
        .on('error', function (err) {
            console.error('An error occurred: ' + err.message);
        })
        .run();
}