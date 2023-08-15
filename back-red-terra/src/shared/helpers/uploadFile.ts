import { InternalServerErrorException } from '@nestjs/common';
import { S3 } from 'aws-sdk';

export async function uploadFile(file: string) {
  try {
    const s3 = new S3({
      region: process.env.AWS_REGION,
    });

    const params: S3.Types.PutObjectRequest = {
      Bucket: 'redterra',
      Key: 'AKIATXCX6XPLPPQ5NZRN',
      Body: file,
      ACL: 'public-read',
    };

    const data = await s3.upload(params).promise();
    return data.Location;
  } catch (error: any) {
    throw new InternalServerErrorException();
  }
}
