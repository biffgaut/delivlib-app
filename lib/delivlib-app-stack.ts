import { Stack, StackProps, Duration } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export class DelivlibAppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // example resource
    const myQueue = new sqs.Queue(this, 'DelivlibAppQueueToo', {
      visibilityTimeout: Duration.seconds(60)
    });
  }
}
