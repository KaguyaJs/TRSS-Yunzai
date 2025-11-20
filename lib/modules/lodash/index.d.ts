import Toolkit from "es-toolkit/compat"

declare const _: typeof Toolkit &  {
    /**
     * 将 sources 中的属性按顺序默认赋值给 object。
     * 仅在 object[key] 为 undefined 时才会赋值。
     *
     * @param object 目标对象
     * @param sources 一个或多个来源对象
     * @returns 传入的 object（已被修改）
     */
    defaults<T extends object, S extends object[]>(
      object: T,
      ...sources: S
    ): T & S[number]
  }

export default _
