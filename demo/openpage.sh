#!/bin/bash

PAGE_URL="file://$(pwd)/demo/index.html"

echo Opening $PAGE_URL ...

#python -m webbrowser $PAGE_URL &
nohup xdg-open $PAGE_URL > /dev/null 2>&1
