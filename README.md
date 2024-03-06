A new Flutter project.


## Deploying

flutter clean
flutter pub get

flutter build web --base-href /arundevportfolio/ --release
cd build/web
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Arundev688/arundevportfolio-.git
git push -u origin main