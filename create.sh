#!/bin/bash

# script for create a new kata in a directory with the name of the kata and the files solution.js, solution.test.js and README.md

echo '📁  Which directory do you want to create the kata? '
read directory

# validate if exists a directory if not create it
if [ ! -d "$directory" ]
then
  echo '📁  The directory does not exist, do you want to create it? (y/n)'
  read createDirectory
  if [ "$createDirectory" = "y" ]
  then
    mkdir $directory
  else
    echo '❌  You must create the directory'
    exit 1
  fi
fi

cd $directory

echo '🎯  What is the name of the kata? '
read kata

mkdir $kata
touch $kata/solution.js
touch $kata/solution.test.js
touch $kata/README.md

IFS='-' read -ra words <<< "$kata"
for word in "${words[@]}"; do
  kataName+="${word^} "
done

kataName="${kataName::-1}"

echo "# $kataName" >> $kata/README.md
echo "" >> $kata/README.md
echo "## Description" >> $kata/README.md

echo "describe('$kataName', () => {
  const testCases = [];
  it('should return a ', () => {});
  it.each(testCases)('', (testCase) => {});
});" >> $kata/solution.test.js

echo '✅  The kata has been created'
