@echo off
cd /d "%~dp0"
title Jarvinen Design Preview
echo.
echo Portfolio preview is running at:
echo http://127.0.0.1:4173/
echo.
echo Keep this window open while viewing the site.
echo Press Ctrl+C to stop.
echo.
npm start
pause
