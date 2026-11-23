@echo off
title CA Inter Jan 2027 Pro Study Partner
echo ========================================================
echo   CA Intermediate Jan 2027 Pro Test & Question Engine
echo ========================================================
echo.
echo Starting local study server...

:: Try to launch python server in background if port 3000 is not active
netstat -ano | findstr :3000 >nul
if %errorlevel% neq 0 (
    echo Starting HTTP Server on port 3000...
    start /b python -m http.server 3000
    timeout /t 2 >nul
)

echo Opening CA Study Partner Portal...
start http://localhost:3000

echo.
echo ========================================================
echo  Portal is live at: http://localhost:3000
echo  (You can also double click index.html anytime offline)
echo ========================================================
echo.
pause
