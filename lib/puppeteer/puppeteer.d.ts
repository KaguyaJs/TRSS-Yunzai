import { icqq } from "trss-yunzai"
import type { ScreenshotOptions } from "../../renderers/puppeteer/lib/puppeteer.js"
import type Renderer from "../renderer/Renderer.js"


/**
 * 渲染器实例（兼容手工引用 Puppeteer）
 *
 * 已扩展方法：
 * - screenshot(name, data): 单页截图
 * - screenshots(name, data): 多页截图
 */
declare const renderer: Renderer & {
  /**
   * 单页截图
   * @param name 模板名称
   * @param data 截图参数
   * @returns Buffer 或 false
   */
  screenshot(name: string, data: ScreenshotOptions): Promise<icqq.ImageElem | false>

  /**
   * 多页截图
   * @param name 模板名称
   * @param data 截图参数
   * @returns Buffer[] 或 false
   */
  screenshots(name: string, data: ScreenshotOptions): Promise<Array<icqq.ImageElem> | false>
}

export default renderer
