#!/usr/bin/env python3
"""
Simple HTTP server for testing the Mafaze website locally
"""

import http.server
import socketserver
import webbrowser
import os

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

print(f"Starting server at http://localhost:{PORT}")
print(f"Serving files from: {DIRECTORY}")
print("Press Ctrl+C to stop the server")

# Start the server
with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
    # Open the website in the default browser
    webbrowser.open(f'http://localhost:{PORT}')
    
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
        httpd.shutdown()
