const ffmpeg = require("fluent-ffmpeg");
const ffmpegPath = require("ffmpeg-static");
const path = require("path");

ffmpeg.setFfmpegPath(ffmpegPath);

exports.cutVideo = () => {
    const inputVideo = path.join(__dirname, "../videos/video.mp4");
    const outputVideo = path.join(__dirname, "../videoOp/cut_video.mp4");

    const startTime = "00:00:00";
    const duration = 10;

    ffmpeg(inputVideo)
        .setStartTime(startTime)
        .duration(duration)
        .videoCodec("copy")
        .audioCodec("copy")  
        .output(outputVideo)
        .on("start", (cmd) => {
            console.log("FFmpeg command:", cmd);
        })
        .on("end", () => {
            console.log("Video cutting finished successfully!");
        })
        .on("error", (err) => {
            console.error("Error:", err.message);
        })
        .run();
};
