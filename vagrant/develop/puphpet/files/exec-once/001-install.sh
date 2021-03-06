BASEDIR="/var/www/html"

echo "installing wdntemplates"

#Go to the basedir to perform commands.
cd $BASEDIR

git submodule init
git submodule update

#Install composer dependencies
cd build
composer install
cd ../

yum install npm --enablerepo=epel

#prevent Error: SELF_SIGNED_CERT_IN_CHAIN
npm config set ca null

echo "Installing pa11y for accessibility testing"
npm install -g phantomjs
npm install -g pa11y

echo "FINISHED installing wdntemplates"
