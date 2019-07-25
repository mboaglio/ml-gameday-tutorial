
module.exports={
  "Parameters":{
    "AssetBucket":{
        "Type":"String"
    },
    "AssetPrefix":{
        "Type":"String"
    },
    "MasterAccount":{
        "Type":"String"
    },
    "GameArchiveBucket":{
        "Type":"String"
    }
  },
  "Outputs":{
    "LayoutEndpoint":{
        "Value":{"Fn::GetAtt":["LayoutPipeline","Outputs.SageMakerEndpoint"]}
    },
    "LayoutParameterStore":{
        "Value":{"Fn::GetAtt":["LayoutPipeline","Outputs.ParameterStore"]}
    },
    "LayoutLaunchTopic":{
        "Value":{"Fn::GetAtt":["LayoutPipeline","Outputs.LaunchTopic"]}
    },
    "LayoutDataBucket":{
        "Value":{"Fn::GetAtt":["LayoutPipeline","Outputs.DataBucket"]}
    },
    "LayoutStateMachine":{
        "Value":{"Fn::GetAtt":["LayoutPipeline","Outputs.StateMachine"]}
    },
    "ShootStateMachine":{
        "Value":{"Fn::GetAtt":["ShootPipeline","Outputs.StateMachine"]}
    },
    "ShootDataBucket":{
        "Value":{"Fn::GetAtt":["ShootPipeline","Outputs.DataBucket"]}
    },
    "ShootEndpoint":{
        "Value":{"Fn::GetAtt":["ShootPipeline","Outputs.SageMakerEndpoint"]}
    },
    "ShootParameterStore":{
        "Value":{"Fn::GetAtt":["ShootPipeline","Outputs.ParameterStore"]}
    },
    "ShootLaunchTopic":{
        "Value":{"Fn::GetAtt":["ShootPipeline","Outputs.LaunchTopic"]}
    },
    "ErrorTopic":{
        "Value":{"Ref":"ErrorTopic"}
    },
    "CrossAccountRole":{
        "Value":{"Fn::GetAtt":["CrossAccountRole","Arn"]}
    }   
  },
  "Resources":Object.assign(
    require('./cfn'),
    require('./s3'),
    require('./sagebuild'),
    require('./lambda'),
    require('./glue'),
    require('./role'),
  ),
  "AWSTemplateFormatVersion": "2010-09-09",
  "Description": ""
}
