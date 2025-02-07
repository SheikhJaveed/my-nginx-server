# my-nginx-server

This is a simple **Node.js HTTP server** that serves static files like **HTML, CSS, JS**.  

## 📌 Features  
✅ Serves static files from the current directory.  
✅ Supports common file types: **HTML, CSS, JS, PNG**.  
✅ Handles 404 errors with a **custom message**.  

## 🚀 Getting Started  

### 1️⃣ Install Node.js  
Make sure you have **Node.js** installed

## How to run 
node server.js
Open in browser : http://localhost:3000/

## ⚙️ How It Works  
- The server listens on **port 3000** and serves static files.  
- If a requested file is found, it is served with the correct **MIME type**.  
- If the file is **not found**, a `404 File Not Found` message is displayed.  
