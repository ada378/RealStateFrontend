@echo off
echo ========================================
echo Real Estate Website - Setup Script
echo ========================================
echo.

echo [1/5] Installing frontend dependencies...
call npm install
if %errorlevel% neq 0 (
    echo Error: Failed to install frontend dependencies
    pause
    exit /b 1
)
echo ✓ Frontend dependencies installed
echo.

echo [2/5] Installing server dependencies...
cd server
call npm install
if %errorlevel% neq 0 (
    echo Error: Failed to install server dependencies
    pause
    exit /b 1
)
cd ..
echo ✓ Server dependencies installed
echo.

echo [3/5] Creating environment file...
if not exist .env (
    copy .env.example .env
    echo ✓ .env file created
    echo.
    echo IMPORTANT: Edit .env file and add your Google Maps API key!
) else (
    echo .env file already exists
)
echo.

echo [4/5] Setup complete!
echo.
echo ========================================
echo Next Steps:
echo ========================================
echo.
echo 1. Edit .env file and add your Google Maps API key
echo 2. Get API key from: https://console.cloud.google.com/
echo.
echo To start the application:
echo.
echo   Terminal 1: node server\server.js
echo   Terminal 2: npm start
echo   Terminal 3: npm run bot (optional)
echo.
echo ========================================
echo.
pause
