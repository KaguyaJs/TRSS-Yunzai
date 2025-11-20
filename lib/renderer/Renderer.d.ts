import type { FSWatcher } from "chokidar"

/**
 * 渲染器基类
 */
export default class Renderer {
  /**
   * 构造函数
   * @param data 渲染器配置
   * @param data.id 渲染器ID
   * @param data.type 渲染器类型
   * @param data.render 渲染器入口方法名
   */
  constructor(data: {
    id?: string
    type?: string
    render?: string
  })

  /** 渲染器ID */
  id: string

  /** 渲染器类型 */
  type: string

  /** 渲染器入口函数 */
  render: Function

  /** 模板 HTML 临时目录 */
  dir: string

  /** 缓存的 HTML 模板内容 */
  html: Record<string, string>

  /** 模板文件监听器 */
  watcher: Record<string, FSWatcher>

  /**
   * 创建文件夹，如果不存在则递归创建
   * @param dirname 目录路径
   * @returns 是否创建成功
   */
  createDir(dirname: string): boolean

  /**
   * 处理模板
   * @param name 模板名称
   * @param data 模板数据
   * @param data.tplFile 模板文件路径
   * @param data.saveId 保存文件名（默认使用 name）
   * @returns 保存路径，失败返回 false
   */
  dealTpl(
    name: string,
    data: { tplFile: string; saveId?: string; [key: string]: any }
  ): string | false

  /**
   * 监听模板文件变化
   * @param tplFile 模板文件路径
   */
  watch(tplFile: string): void
}
