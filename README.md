# aws-nuke-configure

## Setup

```sh
npm i -g aws-nuke-configure
```

## Usage

```sh
aws-nuke-configure --fileName nuke-config.yml
```

This example configuration will generate the following configuration yaml.

![demo](https://github.com/niradler/aws-nuke-configure/blob/master/demo.png?raw=true)

```yaml
regions:
  - us-east-1
account-blocklist:
  - "23123"
accounts:
  "123":
    presets:
      - test
    filters:
      ACMCertificate:
        - type: glob
          value: important
      ACMPCACertificateAuthority:
        - type: glob
          value: important
      ACMPCACertificateAuthorityState:
        - type: glob
          value: important
      APIGatewayAPIKey:
        - type: glob
          value: important
      APIGatewayClientCertificate:
        - type: glob
          value: important
      APIGatewayDomainName:
        - type: glob
          value: important
      APIGatewayRestAPI:
        - type: glob
          value: important
      APIGatewayUsagePlan:
        - type: glob
          value: important
      APIGatewayV2API:
        - type: glob
          value: important
      APIGatewayV2VpcLink:
        - type: glob
          value: important
      APIGatewayVpcLink:
        - type: glob
          value: important
      AWSBackupPlan:
        - type: glob
          value: important
      AWSBackupRecoveryPoint:
        - type: glob
          value: important
      AWSBackupSelection:
        - type: glob
          value: important
      AWSBackupVault:
        - type: glob
          value: important
      AppMeshMesh:
        - type: glob
          value: important
      AppMeshRoute:
        - type: glob
          value: important
      AppMeshVirtualGateway:
        - type: glob
          value: important
      AppMeshVirtualNode:
        - type: glob
          value: important
      AppMeshVirtualRouter:
        - type: glob
          value: important
      AppMeshVirtualService:
        - type: glob
          value: important
      AppStreamDirectoryConfig:
        - type: glob
          value: important
      AppStreamFleet:
        - type: glob
          value: important
      AppStreamFleetState:
        - type: glob
          value: important
      AppStreamImage:
        - type: glob
          value: important
      AppStreamImageBuilder:
        - type: glob
          value: important
      AppStreamImageBuilderWaiter:
        - type: glob
          value: important
      AppStreamStack:
        - type: glob
          value: important
      AppStreamStackFleetAttachment:
        - type: glob
          value: important
      AppSyncGraphqlAPI:
        - type: glob
          value: important
      ApplicationAutoScalingScalableTarget:
        - type: glob
          value: important
      AthenaNamedQuery:
        - type: glob
          value: important
      AthenaWorkGroup:
        - type: glob
          value: important
      AutoScalingGroup:
        - type: glob
          value: important
      AutoScalingPlansScalingPlan:
        - type: glob
          value: important
      BatchComputeEnvironment:
        - type: glob
          value: important
      BatchComputeEnvironmentState:
        - type: glob
          value: important
      BatchJobQueue:
        - type: glob
          value: important
      BatchJobQueueState:
        - type: glob
          value: important
      Cloud9Environment:
        - type: glob
          value: important
      CloudDirectoryDirectory:
        - type: glob
          value: important
      CloudDirectorySchema:
        - type: glob
          value: important
      CloudFormationStack:
        - type: glob
          value: important
      CloudFormationStackSet:
        - type: glob
          value: important
      CloudFormationType:
        - type: glob
          value: important
      CloudFrontDistribution:
        - type: glob
          value: important
      CloudFrontDistributionDeployment:
        - type: glob
          value: important
      CloudFrontOriginAccessIdentity:
        - type: glob
          value: important
      CloudHSMV2Cluster:
        - type: glob
          value: important
      CloudHSMV2ClusterHSM:
        - type: glob
          value: important
      CloudSearchDomain:
        - type: glob
          value: important
      CloudTrailTrail:
        - type: glob
          value: important
      CloudWatchAlarm:
        - type: glob
          value: important
      CloudWatchDashboard:
        - type: glob
          value: important
      CloudWatchEventsRule:
        - type: glob
          value: important
      CloudWatchEventsTarget:
        - type: glob
          value: important
      CloudWatchLogsDestination:
        - type: glob
          value: important
      CloudWatchLogsLogGroup:
        - type: glob
          value: important
      CloudWatchLogsResourcePolicy:
        - type: glob
          value: important
      CodeBuildProject:
        - type: glob
          value: important
      CodeCommitRepository:
        - type: glob
          value: important
      CodeDeployApplication:
        - type: glob
          value: important
      CodePipelinePipeline:
        - type: glob
          value: important
      CodeStarConnection:
        - type: glob
          value: important
      CodeStarNotificationRule:
        - type: glob
          value: important
      CodeStarProject:
        - type: glob
          value: important
      CognitoIdentityPool:
        - type: glob
          value: important
      CognitoIdentityProvider:
        - type: glob
          value: important
      CognitoUserPool:
        - type: glob
          value: important
      CognitoUserPoolClient:
        - type: glob
          value: important
      CognitoUserPoolDomain:
        - type: glob
          value: important
      ComprehendDocumentClassifier:
        - type: glob
          value: important
      ComprehendDominantLanguageDetectionJob:
        - type: glob
          value: important
      ComprehendEndpoint:
        - type: glob
          value: important
      ComprehendEntitiesDetectionJob:
        - type: glob
          value: important
      ComprehendEntityRecognizer:
        - type: glob
          value: important
      ComprehendKeyPhrasesDetectionJob:
        - type: glob
          value: important
      ComprehendSentimentDetectionJob:
        - type: glob
          value: important
      ConfigServiceConfigRule:
        - type: glob
          value: important
      ConfigServiceConfigurationRecorder:
        - type: glob
          value: important
      ConfigServiceDeliveryChannel:
        - type: glob
          value: important
      DAXCluster:
        - type: glob
          value: important
      DAXParameterGroup:
        - type: glob
          value: important
      DAXSubnetGroup:
        - type: glob
          value: important
      DataPipelinePipeline:
        - type: glob
          value: important
      DatabaseMigrationServiceCertificate:
        - type: glob
          value: important
      DatabaseMigrationServiceEndpoint:
        - type: glob
          value: important
      DatabaseMigrationServiceEventSubscription:
        - type: glob
          value: important
      DatabaseMigrationServiceReplicationInstance:
        - type: glob
          value: important
      DatabaseMigrationServiceReplicationTask:
        - type: glob
          value: important
      DatabaseMigrationServiceSubnetGroup:
        - type: glob
          value: important
      DeviceFarmProject:
        - type: glob
          value: important
      DirectoryServiceDirectory:
        - type: glob
          value: important
      DynamoDBTable:
        - type: glob
          value: important
      DynamoDBTableItem:
        - type: glob
          value: important
      EC2Address:
        - type: glob
          value: important
      EC2ClientVpnEndpoint:
        - type: glob
          value: important
      EC2ClientVpnEndpointAttachment:
        - type: glob
          value: important
      EC2CustomerGateway:
        - type: glob
          value: important
      EC2DHCPOption:
        - type: glob
          value: important
      EC2EgressOnlyInternetGateway:
        - type: glob
          value: important
      EC2Image:
        - type: glob
          value: important
      EC2Instance:
        - type: glob
          value: important
      EC2InternetGateway:
        - type: glob
          value: important
      EC2InternetGatewayAttachment:
        - type: glob
          value: important
      EC2KeyPair:
        - type: glob
          value: important
      EC2LaunchTemplate:
        - type: glob
          value: important
      EC2NATGateway:
        - type: glob
          value: important
      EC2NetworkACL:
        - type: glob
          value: important
      EC2NetworkInterface:
        - type: glob
          value: important
      EC2PlacementGroup:
        - type: glob
          value: important
      EC2RouteTable:
        - type: glob
          value: important
      EC2SecurityGroup:
        - type: glob
          value: important
      EC2Snapshot:
        - type: glob
          value: important
      EC2SpotFleetRequest:
        - type: glob
          value: important
      EC2Subnet:
        - type: glob
          value: important
      EC2TGW:
        - type: glob
          value: important
      EC2TGWAttachment:
        - type: glob
          value: important
      EC2VPC:
        - type: glob
          value: important
      EC2VPCEndpoint:
        - type: glob
          value: important
      EC2VPCEndpointServiceConfiguration:
        - type: glob
          value: important
      EC2VPCPeeringConnection:
        - type: glob
          value: important
      EC2VPNConnection:
        - type: glob
          value: important
      EC2VPNGateway:
        - type: glob
          value: important
      EC2VPNGatewayAttachment:
        - type: glob
          value: important
      EC2Volume:
        - type: glob
          value: important
      ECRRepository:
        - type: glob
          value: important
      ECSCluster:
        - type: glob
          value: important
      ECSClusterInstance:
        - type: glob
          value: important
      ECSService:
        - type: glob
          value: important
      ECSTaskDefinition:
        - type: glob
          value: important
      EFSFileSystem:
        - type: glob
          value: important
      EFSMountTarget:
        - type: glob
          value: important
      EKSCluster:
        - type: glob
          value: important
      EKSFargateProfiles:
        - type: glob
          value: important
      EKSNodegroups:
        - type: glob
          value: important
      ELB:
        - type: glob
          value: important
      ELBv2:
        - type: glob
          value: important
      ELBv2TargetGroup:
        - type: glob
          value: important
      EMRCluster:
        - type: glob
          value: important
      EMRSecurityConfiguration:
        - type: glob
          value: important
      ESDomain:
        - type: glob
          value: important
      ElasticBeanstalkApplication:
        - type: glob
          value: important
      ElasticBeanstalkEnvironment:
        - type: glob
          value: important
      ElasticTranscoderPipeline:
        - type: glob
          value: important
      ElasticacheCacheCluster:
        - type: glob
          value: important
      ElasticacheCacheParameterGroup:
        - type: glob
          value: important
      ElasticacheReplicationGroup:
        - type: glob
          value: important
      ElasticacheSubnetGroup:
        - type: glob
          value: important
      FMSNotificationChannel:
        - type: glob
          value: important
      FMSPolicy:
        - type: glob
          value: important
      FSxBackup:
        - type: glob
          value: important
      FSxFileSystem:
        - type: glob
          value: important
      FirehoseDeliveryStream:
        - type: glob
          value: important
      GlobalAccelerator:
        - type: glob
          value: important
      GlobalAcceleratorEndpointGroup:
        - type: glob
          value: important
      GlobalAcceleratorListener:
        - type: glob
          value: important
      GlueClassifier:
        - type: glob
          value: important
      GlueConnection:
        - type: glob
          value: important
      GlueCrawler:
        - type: glob
          value: important
      GlueDatabase:
        - type: glob
          value: important
      GlueDevEndpoint:
        - type: glob
          value: important
      GlueJob:
        - type: glob
          value: important
      GlueTrigger:
        - type: glob
          value: important
      IAMGroup:
        - type: glob
          value: important
      IAMGroupPolicy:
        - type: glob
          value: important
      IAMGroupPolicyAttachment:
        - type: glob
          value: important
      IAMInstanceProfile:
        - type: glob
          value: important
      IAMInstanceProfileRole:
        - type: glob
          value: important
      IAMLoginProfile:
        - type: glob
          value: important
      IAMOpenIDConnectProvider:
        - type: glob
          value: important
      IAMPolicy:
        - type: glob
          value: important
      IAMRole:
        - type: glob
          value: important
      IAMRolePolicy:
        - type: glob
          value: important
      IAMRolePolicyAttachment:
        - type: glob
          value: important
      IAMSAMLProvider:
        - type: glob
          value: important
      IAMServerCertificate:
        - type: glob
          value: important
      IAMServiceSpecificCredential:
        - type: glob
          value: important
      IAMUser:
        - type: glob
          value: important
      IAMUserAccessKey:
        - type: glob
          value: important
      IAMUserGroupAttachment:
        - type: glob
          value: important
      IAMUserPolicy:
        - type: glob
          value: important
      IAMUserPolicyAttachment:
        - type: glob
          value: important
      IAMUserSSHPublicKey:
        - type: glob
          value: important
      IAMVirtualMFADevice:
        - type: glob
          value: important
      ImageBuilderComponent:
        - type: glob
          value: important
      ImageBuilderDistributionConfiguration:
        - type: glob
          value: important
      ImageBuilderImage:
        - type: glob
          value: important
      ImageBuilderInfrastructureConfiguration:
        - type: glob
          value: important
      ImageBuilderPipeline:
        - type: glob
          value: important
      ImageBuilderRecipe:
        - type: glob
          value: important
      IoTAuthorizer:
        - type: glob
          value: important
      IoTCACertificate:
        - type: glob
          value: important
      IoTCertificate:
        - type: glob
          value: important
      IoTJob:
        - type: glob
          value: important
      IoTOTAUpdate:
        - type: glob
          value: important
      IoTPolicy:
        - type: glob
          value: important
      IoTRoleAlias:
        - type: glob
          value: important
      IoTStream:
        - type: glob
          value: important
      IoTThing:
        - type: glob
          value: important
      IoTThingGroup:
        - type: glob
          value: important
      IoTThingType:
        - type: glob
          value: important
      IoTThingTypeState:
        - type: glob
          value: important
      IoTTopicRule:
        - type: glob
          value: important
      KMSAlias:
        - type: glob
          value: important
      KMSKey:
        - type: glob
          value: important
      KinesisAnalyticsApplication:
        - type: glob
          value: important
      KinesisStream:
        - type: glob
          value: important
      KinesisVideoProject:
        - type: glob
          value: important
      LambdaEventSourceMapping:
        - type: glob
          value: important
      LambdaFunction:
        - type: glob
          value: important
      LambdaLayer:
        - type: glob
          value: important
      LaunchConfiguration:
        - type: glob
          value: important
      LexBot:
        - type: glob
          value: important
      LexIntent:
        - type: glob
          value: important
      LexSlotType:
        - type: glob
          value: important
      LifecycleHook:
        - type: glob
          value: important
      LightsailDisk:
        - type: glob
          value: important
      LightsailDomain:
        - type: glob
          value: important
      LightsailInstance:
        - type: glob
          value: important
      LightsailKeyPair:
        - type: glob
          value: important
      LightsailLoadBalancer:
        - type: glob
          value: important
      LightsailStaticIP:
        - type: glob
          value: important
      MQBroker:
        - type: glob
          value: important
      MSKCluster:
        - type: glob
          value: important
      MachineLearningBranchPrediction:
        - type: glob
          value: important
      MachineLearningDataSource:
        - type: glob
          value: important
      MachineLearningEvaluation:
        - type: glob
          value: important
      MachineLearningMLModel:
        - type: glob
          value: important
      MediaConvertJobTemplate:
        - type: glob
          value: important
      MediaConvertPreset:
        - type: glob
          value: important
      MediaConvertQueue:
        - type: glob
          value: important
      MediaLiveChannel:
        - type: glob
          value: important
      MediaLiveInput:
        - type: glob
          value: important
      MediaLiveInputSecurityGroup:
        - type: glob
          value: important
      MediaPackageChannel:
        - type: glob
          value: important
      MediaPackageOriginEndpoint:
        - type: glob
          value: important
      MediaStoreContainer:
        - type: glob
          value: important
      MediaStoreDataItems:
        - type: glob
          value: important
      MediaTailorConfiguration:
        - type: glob
          value: important
      MobileProject:
        - type: glob
          value: important
      NeptuneCluster:
        - type: glob
          value: important
      NeptuneInstance:
        - type: glob
          value: important
      NetpuneSnapshot:
        - type: glob
          value: important
      OpsWorksApp:
        - type: glob
          value: important
      OpsWorksCMBackup:
        - type: glob
          value: important
      OpsWorksCMServer:
        - type: glob
          value: important
      OpsWorksCMServerState:
        - type: glob
          value: important
      OpsWorksInstance:
        - type: glob
          value: important
      OpsWorksLayer:
        - type: glob
          value: important
      OpsWorksUserProfile:
        - type: glob
          value: important
      RDSDBCluster:
        - type: glob
          value: important
      RDSDBClusterParameterGroup:
        - type: glob
          value: important
      RDSDBParameterGroup:
        - type: glob
          value: important
      RDSDBSubnetGroup:
        - type: glob
          value: important
      RDSEventSubscription:
        - type: glob
          value: important
      RDSInstance:
        - type: glob
          value: important
      RDSSnapshot:
        - type: glob
          value: important
      RedshiftCluster:
        - type: glob
          value: important
      RedshiftParameterGroup:
        - type: glob
          value: important
      RedshiftSnapshot:
        - type: glob
          value: important
      RedshiftSubnetGroup:
        - type: glob
          value: important
      RekognitionCollection:
        - type: glob
          value: important
      ResourceGroupGroup:
        - type: glob
          value: important
      RoboMakerDeploymentJob:
        - type: glob
          value: important
      RoboMakerFleet:
        - type: glob
          value: important
      RoboMakerRobot:
        - type: glob
          value: important
      RoboMakerRobotApplication:
        - type: glob
          value: important
      RoboMakerSimulationApplication:
        - type: glob
          value: important
      RoboMakerSimulationJob:
        - type: glob
          value: important
      Route53HealthCheck:
        - type: glob
          value: important
      Route53HostedZone:
        - type: glob
          value: important
      Route53ResolverEndpoint:
        - type: glob
          value: important
      Route53ResolverRule:
        - type: glob
          value: important
      Route53ResourceRecordSet:
        - type: glob
          value: important
      Route53TrafficPolicy:
        - type: glob
          value: important
      S3Bucket:
        - type: glob
          value: important
      S3MultipartUpload:
        - type: glob
          value: important
      S3Object:
        - type: glob
          value: important
      SESConfigurationSet:
        - type: glob
          value: important
      SESIdentity:
        - type: glob
          value: important
      SESReceiptFilter:
        - type: glob
          value: important
      SESReceiptRuleSet:
        - type: glob
          value: important
      SESTemplate:
        - type: glob
          value: important
      SFNStateMachine:
        - type: glob
          value: important
      SNSEndpoint:
        - type: glob
          value: important
      SNSPlatformApplication:
        - type: glob
          value: important
      SNSSubscription:
        - type: glob
          value: important
      SNSTopic:
        - type: glob
          value: important
      SQSQueue:
        - type: glob
          value: important
      SSMActivation:
        - type: glob
          value: important
      SSMAssociation:
        - type: glob
          value: important
      SSMDocument:
        - type: glob
          value: important
      SSMMaintenanceWindow:
        - type: glob
          value: important
      SSMParameter:
        - type: glob
          value: important
      SSMPatchBaseline:
        - type: glob
          value: important
      SSMResourceDataSync:
        - type: glob
          value: important
      SageMakerApp:
        - type: glob
          value: important
      SageMakerDomain:
        - type: glob
          value: important
      SageMakerEndpoint:
        - type: glob
          value: important
      SageMakerEndpointConfig:
        - type: glob
          value: important
      SageMakerModel:
        - type: glob
          value: important
      SageMakerNotebookInstance:
        - type: glob
          value: important
      SageMakerNotebookInstanceLifecycleConfig:
        - type: glob
          value: important
      SageMakerNotebookInstanceState:
        - type: glob
          value: important
      SageMakerUserProfiles:
        - type: glob
          value: important
      SecretsManagerSecret:
        - type: glob
          value: important
      SecurityHub:
        - type: glob
          value: important
      ServiceCatalogConstraintPortfolioAttachment:
        - type: glob
          value: important
      ServiceCatalogPortfolio:
        - type: glob
          value: important
      ServiceCatalogPortfolioProductAttachment:
        - type: glob
          value: important
      ServiceCatalogPortfolioShareAttachment:
        - type: glob
          value: important
      ServiceCatalogPrincipalPortfolioAttachment:
        - type: glob
          value: important
      ServiceCatalogProduct:
        - type: glob
          value: important
      ServiceCatalogProvisionedProduct:
        - type: glob
          value: important
      ServiceCatalogTagOption:
        - type: glob
          value: important
      ServiceCatalogTagOptionPortfolioAttachment:
        - type: glob
          value: important
      ServiceDiscoveryInstance:
        - type: glob
          value: important
      ServiceDiscoveryNamespace:
        - type: glob
          value: important
      ServiceDiscoveryService:
        - type: glob
          value: important
      SimpleDBDomain:
        - type: glob
          value: important
      StorageGatewayFileShare:
        - type: glob
          value: important
      StorageGatewayGateway:
        - type: glob
          value: important
      StorageGatewayTape:
        - type: glob
          value: important
      StorageGatewayVolume:
        - type: glob
          value: important
      TransferServer:
        - type: glob
          value: important
      TransferServerUser:
        - type: glob
          value: important
      WAFRegionalByteMatchSet:
        - type: glob
          value: important
      WAFRegionalByteMatchSetIP:
        - type: glob
          value: important
      WAFRegionalIPSet:
        - type: glob
          value: important
      WAFRegionalIPSetIP:
        - type: glob
          value: important
      WAFRegionalRateBasedRule:
        - type: glob
          value: important
      WAFRegionalRateBasedRulePredicate:
        - type: glob
          value: important
      WAFRegionalRegexMatchSet:
        - type: glob
          value: important
      WAFRegionalRegexMatchTuple:
        - type: glob
          value: important
      WAFRegionalRegexPatternSet:
        - type: glob
          value: important
      WAFRegionalRegexPatternString:
        - type: glob
          value: important
      WAFRegionalRule:
        - type: glob
          value: important
      WAFRegionalRuleGroup:
        - type: glob
          value: important
      WAFRegionalRulePredicate:
        - type: glob
          value: important
      WAFRegionalWebACL:
        - type: glob
          value: important
      WAFRegionalWebACLRuleAttachment:
        - type: glob
          value: important
      WAFRule:
        - type: glob
          value: important
      WAFWebACL:
        - type: glob
          value: important
      WAFWebACLRuleAttachment:
        - type: glob
          value: important
      WAFv2IPSet:
        - type: glob
          value: important
      WAFv2RegexPatternSet:
        - type: glob
          value: important
      WAFv2RuleGroup:
        - type: glob
          value: important
      WAFv2WebACL:
        - type: glob
          value: important
      WorkLinkFleet:
        - type: glob
          value: important
      WorkSpacesWorkspace:
        - type: glob
          value: important
presets:
  test:
    filters:
      IAMUserPolicyAttachment:
        - type: glob
          value: "*admin*"
```
