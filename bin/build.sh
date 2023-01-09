#!/bin/bash

echo "building app..."

# clean /dist dir
rimraf dist;

# get javascript
tsc;

# copy views folder if exists
if [ -d "src/views" ]; then
  cp -r src/views dist/views;
else
  echo "Error: Directory view folder does not exist."
fi

echo "app built!"