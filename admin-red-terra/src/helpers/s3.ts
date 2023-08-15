import { S3 } from 'aws-sdk';

export const upload = async (file: any) => {
  // Create an S3 service object
  const s3 = new S3({
    apiVersion: '2006-03-01',
    credentials: {
      accessKeyId: 'AKIATXCX6XPLPPQ5NZRN',
      secretAccessKey: '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',
    },
    region: 'us-east-1',
  });

  // Define the bucket and file names
  const params = {
    Bucket: 'redterra',
    Key: `${new Date().toISOString()}-${file.name}`,
    Body: file,
    ACL: 'public-read',
    ContentType: file.type,
  };

  // Upload the file to the bucket
  const s3Data = s3.upload(params).promise()
  return s3Data;
};
