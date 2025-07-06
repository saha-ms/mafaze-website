# PowerShell script to run a local web server
$port = 8000
$root = $PSScriptRoot

Write-Host "Starting local web server..." -ForegroundColor Green
Write-Host "Server URL: http://localhost:$port" -ForegroundColor Yellow
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Cyan

# Open the website in default browser
Start-Process "http://localhost:$port"

# Change to the website directory
Push-Location $root

try {
    # Try Python first
    if (Get-Command python -ErrorAction SilentlyContinue) {
        python -m http.server $port
    }
    elseif (Get-Command python3 -ErrorAction SilentlyContinue) {
        python3 -m http.server $port
    }
    else {
        Write-Host "Python not found. Trying Node.js..." -ForegroundColor Yellow
        if (Get-Command npx -ErrorAction SilentlyContinue) {
            npx http-server -p $port -o
        }
        else {
            Write-Host "Neither Python nor Node.js found. Please install one of them." -ForegroundColor Red
            Write-Host "Or simply open index.html directly in your browser." -ForegroundColor Yellow
        }
    }
}
finally {
    Pop-Location
}
