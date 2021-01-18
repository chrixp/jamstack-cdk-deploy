import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as cloudfront from '@aws-cdk/aws-cloudfront';
import * as s3Deployment from '@aws-cdk/aws-s3-deployment';

export class StaticWebsiteDeploymentStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    const deploymentBucket = new s3.Bucket(this,`${id}-s3`, {
        websiteIndexDocument: 'index.html'
    });

    const oai = new cloudfront.OriginAccessIdentity(this,`${id}-oai`); //Force the S3 bucket to only be accessible through cloudfront

    const cloudfrontDistribution = new cloudfront.CloudFrontWebDistribution(this, `${id}-cloudfront`, {
        originConfigs: [
            {
                s3OriginSource: {
                    s3BucketSource: deploymentBucket,
                    originAccessIdentity: oai
                },
                behaviors: [
                    { isDefaultBehavior: true }
                ]
            }
        ]
    })

    new s3Deployment.BucketDeployment(this,`${id}-s3-deployment`,{
        sources: [s3Deployment.Source.asset('./website')],
        destinationBucket: deploymentBucket,
        distribution: cloudfrontDistribution,
        distributionPaths: ['/index.html'] // Clear the cache at edge caches for new content to be loaded
    })
  }
}
