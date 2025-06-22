// src/utils/cos.js
import COS from "cos-wx-sdk-v5";
import Taro from "@tarojs/taro";

// 初始化配置（建议将敏感信息放在服务端）
const cosConfig = {
  bucket: "your-bucket-name-123456", // 替换为你的存储桶名称
  region: "ap-shanghai", // 替换为你的存储桶地域
  secretId: "YOUR_SECRET_ID", // 从服务端获取（前端存储有安全风险）
  secretKey: "YOUR_SECRET_KEY", // 从服务端获取
};

// 创建 COS 实例
const cos = new COS(
  SecretId: cosConfig.secretId,
  SecretKey: cosConfig.secretKey,
  SimpleUploadMethod: "putObject", // 微信小程序环境建议使用 putObject
});

/**
 * COS 图片上传
 * @param {string} filePath - 本地文件路径（来自 Taro.chooseImage）
 * @param {string} [dir='images/'] - 存储目录
 * @returns {Promise<string>} 图片的在线URL
 */
export const uploadImage = async (filePath, dir = "images/") => {
  try {
    // 生成随机文件名（防止覆盖）
    const timestamp = new Date().getTime();
    const random = Math.floor(Math.random() * 1000);
    const key = `${dir}${timestamp}_${random}.jpg`;

    // 执行上传
    const { statusCode, Location } = await cos.putObject({
      Bucket: cosConfig.bucket,
      Region: cosConfig.region,
      Key: key,
      FilePath: filePath,
      onProgress: (progressData) => {
        console.log("上传进度:", progressData.percent * 100 + "%");
      },
    });

    if (statusCode === 200) {
      // 构建完整的访问 URL
      return `https://${Location}`;
    }
    throw new Error(`上传失败，状态码: ${statusCode}`);
  } catch (error) {
    console.error("COS上传错误:", error);
    throw new Error("图片上传失败，请重试");
  }
};

/**
 * COS 文件下载（返回临时路径供预览）
 * @param {string} url - 文件在线URL
 * @returns {Promise<string>} 本地临时文件路径
 */
export const downloadFile = async (url) => {
  try {
    const { tempFilePath } = await Taro.downloadFile({
      url,
      header: { "Cache-Control": "no-cache" },
    });
    return tempFilePath;
  } catch (error) {
    console.error("文件下载失败:", error);
    throw new Error("文件下载失败");
  }
};

/**
 * 安全获取 COS 签名 URL（适用于私有桶）
 * @param {string} key - 文件在 COS 中的路径
 * @param {number} [expires=900] - 链接有效期（秒）
 * @returns {Promise<string>} 带签名的临时 URL
 */
export const getSecureUrl = (key, expires = 900) => {
  return new Promise((resolve, reject) => {
    cos.getObjectUrl(
      {
        Bucket: cosConfig.bucket,
        Region: cosConfig.region,
        Key: key,
        Expires: expires,
        Sign: true,
      },
      (err, data) => {
        err ? reject(err) : resolve(data.Url);
      }
    );
  });
};
