#!/bin/bash
mkdir -p assets/images
target_size_mb=10
target_size_bytes=$((target_size_mb * 1024 * 1024))

convert_video() {
    input=$1
    output=$2

    # Skip if output file already exists
    if [ -f "$output" ]; then
        echo "Skipping $output - file already exists"
        return
    fi

    duration=$(ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "$input")
    duration=${duration%.*}

    # First attempt - high quality but reduced fps and scale
    ffmpeg -y -i "$input" -vf "fps=8,scale=480:-1:flags=lanczos" -q:v 30 -c:v gif "$output"
    size=$(stat -f%z "$output")

    if [ "$size" -gt "$target_size_bytes" ]; then
        echo "First attempt too large ($((size/1024/1024))MB), trying with reduced quality..."
        # Second attempt - more aggressive quality reduction
        ffmpeg -y -i "$input" -vf "fps=6,scale=480:-1:flags=lanczos" -q:v 40 -c:v gif "$output"
        size=$(stat -f%z "$output")

        if [ "$size" -gt "$target_size_bytes" ]; then
            echo "Quality reduction not enough, trying with reduced duration..."
            # Final attempt - reduce duration if quality reduction wasn't enough
            new_duration=$((duration * 8 * 1024 * 1024 / size))
            ffmpeg -y -i "$input" -vf "fps=6,scale=480:-1:flags=lanczos,trim=0:$new_duration" -q:v 40 -c:v gif "$output"
        fi
    fi
}

for video in assets/videos/*; do
    filename=$(basename "$video")
    name="${filename%.*}"
    gif_path="assets/images/$name.gif"
    echo "Converting $filename to GIF..."
    convert_video "$video" "$gif_path"
    if [ -f "$gif_path" ]; then
        final_size=$(stat -f%z "$gif_path")
        echo "Final GIF size: $((final_size/1024/1024))MB"
    fi
done
