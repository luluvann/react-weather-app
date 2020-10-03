#!/bin/bash

set -e

cd $(git rev-parse --show-toplevel)

rm -rf build/*
npm run build
rm -rf website/*
cp -r build/* website/
git reset .
git add website
git commit -m "updated website"
git push

