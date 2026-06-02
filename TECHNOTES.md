## Convert Movie

To shrink your .MOV file and convert it to a web-optimized .webm format at 420p, FFmpeg is the best tool for the job.

Here is the recommended command line breakdown:

ffmpeg -i IMG_9214.MOV -c:v libvpx-vp9 -crf 32 -b:v 0 -vf "scale=-2:420" -c:a libopus output.webm

Flag Breakdown
-i IMG_9214.MOV: Specifies your input file.
-c:v libvpx-vp9: Uses the VP9 video codec, which provides excellent compression and quality for WebM files in modern browsers.
-crf 32 -b:v 0: Sets the quality level (Constant Rate Factor). VP9 uses a scale of 0–63. 32 is a great sweet spot for clear web video without massive file sizes. Setting -b:v 0 is required when using CRF mode with VP9.
-vf "scale=-2:420": This is the video filter that handles the resizing.
The 420 sets the vertical height to 420 pixels.
The -2 tells FFmpeg to automatically calculate the width to maintain the original aspect ratio, while ensuring the width is an even number (a strict requirement for most video codecs).
-c:a libopus: Uses the Opus audio codec, which is the standard, high-efficiency pairing for WebM.
output.webm: The name of your newly shrunk and converted file.
