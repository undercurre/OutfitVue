// src/utils/cos.js
import COS from "cos-wx-sdk-v5";

const res = {
  code: 200,
  msg: "Success",
  data: {
    expire: "1751721431",
    credentials: {
      sessionToken:
        "UQK8IWC30qrbdGunwJGmPawIU5WcLo5abd2625100f07be0503da9a77d20281085hzBiYwPp_OMDS4B0TRtfSJpxEiW0CZ3mornYV9d44-j7So6gX08FHXal9dEtvZLG8jDE6Isv3ok-M3F93qkcpr2S-a_S9rOa1lg3BzMExfhoAGZSFYsaGNFm0am1k9vfRwQKbd8CJ3-vsp2aUKw_doZ6PTEprGkRvmxoNJ1g9vSTNlSdmY7xe245togODzxQNlFisbGCh-zuToh8Rhc9V1vPSvEEJwWeD0V_06AoUrdbt8bQaBZfRAqV9DOgXuC7Ex3U7hcaosnHrb9j2YAZeWyorSp_5F0cSh5dKr_PZhj1KORQbnSQidUbnrVSjSuzq9uzm1eh7YX3uBePCvZGZmIdoXTJuxagy8Lj4MFX6tRb4qEFZVwP-0IK1dnR9jk4czH4P7QW5nO1HpVqOC1lqjLOiBWek2Qx41xaS2CfONkrQU957vxCw4GyCbs0xwLpIotzSem8BEvM6Q-77xHIQy0uWkndr2QuJ7lnD0b98w",
      tmpSecretId:
        "AKIDs0B65111zJN1uhDMthjjD5su2qBHe1yo6tzXpO4NiFUNzD5HMmcQC72GAlQDUC16",
      tmpSecretKey: "MiEqbD6kcGCZn4M4t/EoVp0ScQkNwbRK4ZfiGP9sCl0=",
    },
    host: "outfitvue-1305592523.cos.ap-guangzhou.myqcloud.com",
    dir: "model/",
  },
};
const {
  expire,
  credentials: { sessionToken, tmpSecretId, tmpSecretKey },
  host,
  dir,
} = res.data;

const cos = new COS({
  getAuthorization: (options, callback) => {
    callback({
      TmpSecretId: tmpSecretId,
      TmpSecretKey: tmpSecretKey,
      SecurityToken: sessionToken,
      ExpiredTime: Number(expire), // SDK 需毫秒时间戳
    });
  },
});

const key = `${dir}man_1.png`; // 完整文件路径: "model/image.jpg"

let url = "";

cos.getObjectUrl(
  {
    Bucket: "outfitvue-1305592523", // 从 host 提取: outfitvue-1305592523.cos.ap-guangzhou.myqcloud.com
    Region: "ap-guangzhou", // 从 host 提取
    Key: key, // 文件路径
  },
  (err, data) => {
    if (err) throw err;
    console.log("预览 URL:", data.Url); // 得到带签名的链接
    url = data.Url; // 将 URL 存储在变量中
  }
);

export default url;

export const getModelUrl = async (filename: string) => {
  return new Promise((resolve, reject) => {
    cos.getObjectUrl(
      {
        Bucket: "outfitvue-1305592523",
        Region: "ap-guangzhou",
        Key: `${dir}${filename}`, // 动态生成文件路径
        Sign: true,
      },
      (err, data) => {
        if (err) return reject(err);
        resolve(data.Url);
      }
    );
  });
};
