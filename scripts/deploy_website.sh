#!/bin/bash

set -e

cd $(git rev-parse --show-toplevel)

git reset .
rm -rf build/*
npm run build
rm -rf website/*
cp -r build/* website/
git add website
git commit -m "updated website"
git push

