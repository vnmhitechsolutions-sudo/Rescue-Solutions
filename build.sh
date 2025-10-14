#!/bin/bash

echo "Building Rescue Solutions React App..."

# Navigate to the React app directory
cd rescue-solutions

# Install dependencies
echo "Installing dependencies..."
npm ci

# Build the app
echo "Building the app..."
npm run build

echo "Build completed! Check the rescue-solutions/build directory."
