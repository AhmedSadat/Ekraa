git add . 
git commit -am "commit $(pwd) " 
git push origin master 
npm run-script build 
mv ./dist/ekraa/index.html ./dist/ekraa/index.php
scp -rP2222 ./dist/ekraa/* moazjor1@funmarket.ca:/home1/moazjor1/ikraa.ca  

