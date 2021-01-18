# Static Website Deployment on S3 and Cloudfront

## Prerequisite knowledge
- AWS S3
- AWS Cloudfront
- AWS CDK
- AWS Lambda
- AWS API Gateway
- AWS SDK
- Typescript

## Background

Deployment of JAM stack

## Directory Structure
- `functions`: Lambda functions 
- `frontend`: Frontend Source

## Deployment

Run these commands
```
cdk bootstrap
npm run build
cdk deploy
```