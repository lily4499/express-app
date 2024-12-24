#!/bin/bash
cd /home/ubuntu/express-app
pm2 start index.js --name "express-app"

