import type { BinaryLike } from "node:crypto"

/**
 * 使用 Node.js 内置 crypto 模块计算 MD5 哈希值
 *
 * @param data 输入数据，可以为字符串、Buffer、ArrayBuffer、TypedArray 等
 * @returns 返回生成的 32 位十六进制 MD5 字符串
 *
 * @example
 * md5("hello") // "5d41402abc4b2a76b9719d911017c592"
 */
declare function md5(
  data: BinaryLike
): string

export default md5
