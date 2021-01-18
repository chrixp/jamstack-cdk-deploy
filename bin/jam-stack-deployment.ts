#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { PROJECT_ID } from '../consts';
import { StaticWebsiteDeploymentStack } from '../lib/static-website-deployment-stack';
import { LambdaFunctionDeploymentStack } from '../lib/lambda-function-deployment'

const app = new cdk.App();
//new StaticWebsiteDeploymentStack(app, `${PROJECT_ID}-static`);
new LambdaFunctionDeploymentStack(app, `${PROJECT_ID}-api`)

