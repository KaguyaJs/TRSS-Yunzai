import type Renderer from "./Renderer.js"
import type cfg from "../config/config.js"

/**
 * 渲染器加载器，用于动态加载 Renderer 实例
 */
export default class RendererLoader {
  constructor()

  /** 已加载的渲染器 Map，key 为 renderer.id，value 为 Renderer 实例 */
  renderers: Map<string, Renderer>

  /** 渲染器目录 */
  dir: string

  /** 文件监视器，用于热加载 */
  watcher: Record<string, any>

  /**
   * 初始化渲染器加载器
   * @returns RendererLoader 实例
   */
  static init(): Promise<RendererLoader>

  /**
   * 加载所有渲染器
   */
  load(): Promise<void>

  /**
   * 获取渲染器实例
   * @param name 渲染器名称（默认使用配置中的 renderer.name 或 puppeteer）
   * @returns Renderer 实例，如果不存在则返回空对象
   */
  getRenderer(name?: string): Renderer | Record<string, never>
}
