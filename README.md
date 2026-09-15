# Email forwarding

forwarded through improvmx

# Deployment

Upload to S3 bucket `themelodymaker-site` in the MelodyMaker AWS account (525184038481) with something like:

`npm run build && aws s3 sync ./dist s3://themelodymaker-site --delete --profile tmm`

This assumes you've got the AWS CLI installed and configured with the correct profile.

# AWS Lambda

The Lambda function is called `handleContactForm`; source code is in the `aws-code` folder. It's manually deployed.
