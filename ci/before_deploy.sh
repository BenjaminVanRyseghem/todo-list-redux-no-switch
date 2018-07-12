#!/bin/bash

set -ex

# Add tag to git
git config user.email "travis@weezevent.com"
git config user.name "Travis CI"
git tag "t$TRAVIS_BUILD_NUMBER" -a -m "Travis release $TRAVIS_BUILD_NUMBER"
git push --tags

# Generate manifest.json

node ./generate_manifesto.js

# Create an archive with the dist folder
mv dist tmp
mkdir dist
tar -czvf ./dist/v$TRAVIS_BUILD_NUMBER.tar.gz -C tmp ./
rm -rf tmp
