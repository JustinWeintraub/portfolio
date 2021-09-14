#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

cp -R "index.html" "404.html"

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'Deploying portfolio'

git remote add origin https://github.com/JustinWeintraub/JustinWeintraub.github.io
git push origin master --force

cd -

