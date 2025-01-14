#!/bin/bash
mkdir -p assets/images
for video in assets/videos/*; do
  filename=$(basename "$video")
  name="${filename%.*}"
  gif_path="assets/images/$name.gif"
  if [ ! -f "$gif_path" ]; then
    echo "Converting $filename to GIF..."
    ffmpeg -i "$video" -vf "fps=10,scale=480:-1:flags=lanczos" -c:v gif "$gif_path"
  else
    echo "Skipping $filename - GIF already exists"
  fi
done
