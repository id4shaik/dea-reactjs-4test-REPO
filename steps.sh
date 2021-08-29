#!/bin/bash

# Upload build & project files into S3
npm run client-s3-deploy

# Run for invalidation the latest update reflect in edge locaiton
npm run client-cloudfront-invalidation

# To update the latest changes/ rebuild
npm run client-deploy
