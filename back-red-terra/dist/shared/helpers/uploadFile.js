"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = void 0;
const common_1 = require("@nestjs/common");
const aws_sdk_1 = require("aws-sdk");
async function uploadFile(file) {
    try {
        const s3 = new aws_sdk_1.S3({
            region: process.env.AWS_REGION,
        });
        const params = {
            Bucket: 'redterra',
            Key: 'AKIATXCX6XPLPPQ5NZRN',
            Body: file,
            ACL: 'public-read',
        };
        const data = await s3.upload(params).promise();
        return data.Location;
    }
    catch (error) {
        throw new common_1.InternalServerErrorException();
    }
}
exports.uploadFile = uploadFile;
//# sourceMappingURL=uploadFile.js.map