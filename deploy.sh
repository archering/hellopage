#!/bin/sh

if [ -z "$s1" ]
then 
    echo "which folder do you want to publish ?"
    exit 1
fi
git subtree push --prefix $1 origin gh-pages
