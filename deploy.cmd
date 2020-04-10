@IF "%1" == ”“ (
    echo "please select a folder to publish"
) ELSE (
    git subtree push --prefix %1 origin ipages
)
