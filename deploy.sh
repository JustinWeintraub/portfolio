#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# adding google analytics
code_to_append=$(cat <<EOL
<script async src="https://www.googletagmanager.com/gtag/js?id=G-FVKMMLV3SZ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag("js", new Date());

  gtag("config", "G-FVKMMLV3SZ");
</script>
EOL
)
echo $code_to_append
head -c 37 index.html | echo
head -c 37 index.html > "404.html"
echo "$code_to_append" >> "404.html"
tail -c +38 index.html >> "404.html"
cp "404.html" index.html
# i want a 404 html too that's the same as the regular page


# # if you are deploying to a custom domain
# # echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'Deploying portfolio'

git remote add origin https://github.com/JustinWeintraub/JustinWeintraub.github.io
git push origin master --force

cd -
