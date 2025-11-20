import type Renderer from "../../../lib/renderer/Renderer.js"
import type { Browser, LaunchOptions, ConnectOptions } from "puppeteer"

/**
 * Puppeteer 渲染器，用于生成截图
 */
export default class Puppeteer extends Renderer {
  constructor(config: PuppeteerConfig)

  /** puppeteer 浏览器实例 */
  browser: Browser | false

  /** 是否锁定（防止重复初始化） */
  lock: boolean

  /** 当前正在截图的任务名称列表 */
  shoting: string[]

  /** 截图次数，达到 restartNum 会自动重启浏览器 */
  renderNum: number

  /** 截图次数达到多少时重启浏览器 */
  restartNum: number

  /** Puppeteer 启动配置 */
  config: PuppeteerConfig

  /** 超时重启 Puppeteer 的时间（毫秒） */
  puppeteerTimeout: number

  /** page.goto 的默认参数 */
  pageGotoParams: Record<string, any>

  /** 根据 MAC 地址缓存的 key */
  browserMacKey?: string

  /**
   * 初始化 Chromium / 连接现有实例
   */
  browserInit(): Promise<Browser | false>

  /**
   * 获取本机 MAC 地址（去除冒号）
   */
  getMac(): string

  /**
   * 截图方法
   *
   * @param name 模板名称
   * @param data 截图配置
   * @returns Buffer（单页）或 Buffer[]（多页） 或 false
   */
  screenshot(
    name: string,
    data?: ScreenshotOptions
  ): Promise<Buffer | Buffer[] | false>

  /**
   * 重启浏览器
   * @param force 是否强制
   */
  restart(force?: boolean): Promise<Browser | false | void>

  /**
   * 停止浏览器
   */
  stop(browser: Browser): Promise<void>
}

/**
 * Puppeteer 相关配置
 */
export interface PuppeteerConfig extends LaunchOptions, ConnectOptions {
  /** puppeteerTimeout */
  puppeteerTimeout?: number

  /** 自定义 chromium 路径（兼容旧配置） */
  chromiumPath?: string

  /** wsEndpoint（远程浏览器） */
  puppeteerWS?: string

  /** 页面 goto 参数 */
  pageGotoParams?: Record<string, any>

  /** 是否使用 wsEndpoint 而非本地启动 */
  wsEndpoint?: string
}

/**
 * screenshot 方法支持的参数
 */
export interface ScreenshotOptions {
  /** 模板路径（必传） */
  tplFile: string

  /** 保存 HTML 文件名, 不传默认使用 name */
  saveId?: string

  /** 生成图片类型，默认 jpeg */
  imgType?: "jpeg" | "png"

  /** 图片质量（0-100，仅 jpeg生效，默认90） */
  quality?: number

  /** 图片是否透明 */
  omitBackground?: boolean

  /** 图片保存路径（不传则不写入硬盘） */
  path?: string

  /** 是否分页截图 */
  multiPage?: boolean

  /** 分页高度 */
  multiPageHeight?: number

  /** 页面 goto 参数（覆盖默认配置） */
  pageGotoParams?: Record<string, any>
}
