{
  "family": "\($name)",
  "executionRoleArn": "arn:aws:iam::\($account_id):role/ECSTaskExecutionRoleFor\($pascal_case_name)",
  "taskRoleArn": "arn:aws:iam::\($account_id):role/ECSTaskRoleFor\($pascal_case_name)",
  "cpu": "512",
  "memory": "2048",
  "requiresCompatibilities": [
    "FARGATE"
  ],
  "networkMode": "awsvpc",
  "containerDefinitions": [
    {
      "name": "\($name)",
      "image": "<IMAGE1_NAME>",
      "essential": true,
      "environment": [
        {
          "name": "AWS_REGION",
          "value": "\($region)"
        },
        {
          "name": "NAME",
          "value": "\($name)"
        },
        {
          "name": "VERSION",
          "value": "\($version)"
        }
      ],
      "environmentFiles": [
        {
          "type": "s3",
          "value": "arn:aws:s3:::tesspay-codepipeline/\($name)/config/\($version)/\($env).env"
        }
      ],
      "secrets": [
        {
          "name": "MONGO_CONNECTION_URL",
          "valueFrom": "arn:aws:ssm:\($region):\($account_id):parameter/database/mongodb/uri"
        },
        {
          "name": "COGNITO_USER_POOL_ID",
          "valueFrom": "arn:aws:ssm:\($region):\($account_id):parameter/cognito/user-pool/id"
        },
        {
          "name": "COGNITO_CLIENT_ID",
          "valueFrom": "arn:aws:ssm:\($region):\($account_id):parameter/cognito/app-client/id"
        },
        {
          "name": "SENDGRID_API_KEY",
          "valueFrom": "arn:aws:ssm:\($region):\($account_id):parameter/sendgrid/api-key"
        }
      ],
      "portMappings": [
        {
          "protocol": "tcp",
          "containerPort": 3000
        },
        {
          "protocol": "tcp",
          "containerPort": 3001
        }
      ],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "/ecs/\($name)",
          "awslogs-region": "\($region)",
          "awslogs-stream-prefix": "/ecs"
        }
      }
    }
  ]
}


