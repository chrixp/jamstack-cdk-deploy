import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as StaticWebsiteDeployment from '../lib/static-website-deployment-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new StaticWebsiteDeployment.StaticWebsiteDeploymentStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
