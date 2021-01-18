import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigateway from '@aws-cdk/aws-apigateway';
import * as path from 'path';
import { } from '../consts';
import { FUNCTION_CONFIG, FUNCTION_PATH } from '../function-config'
import { LambdaIntegration } from '@aws-cdk/aws-apigateway';

export class LambdaFunctionDeploymentStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const api = new apigateway.RestApi(this, `${id}-endpoint`, {
        deploy: true,
        defaultCorsPreflightOptions: {
            allowOrigins: ['*'],
            allowHeaders: ['*'],
        }
    })

    FUNCTION_CONFIG.forEach(config => {
        const codePath = path.join(FUNCTION_PATH, config.folder)
        const backend = new lambda.Function(this, `${id}-${config.folder}-function`, {
            runtime: lambda.Runtime.NODEJS_10_X,
            handler: 'index.handler',
            code: lambda.Code.fromAsset(codePath),
        });
        
        api.root.addResource(config.path).addMethod(config.allowedMethod, new LambdaIntegration(backend))
    })
  }
}
