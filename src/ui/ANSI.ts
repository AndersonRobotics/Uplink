import { Buffer } from 'buffer'

type Int = Number

export const CURSOR_UP = (by: Int) => Buffer.from(`\u001b[${by}A`)
export const CURSOR_DOWN = (by: Int) => Buffer.from(`\u001b[${by}B`)
export const CURSOR_FORWARD = (by: Int) => Buffer.from(`\u001b[${by}C`)
export const CURSOR_BACK = (by: Int) => Buffer.from(`\u001b[${by}D`)
export const CURSOR_SET = (x: Int, y: Int) => Buffer.from(`\u001b[${x};${y}H`)
export const CLEAR_CURSOR = Buffer.from(`\u001b[0J`)
export const CLEAR_SCREEN = Buffer.from(`\u001b[1J`)
export const CLEAR = Buffer.from(`\u001b[2J`)
export const FORMAT = (id: Int) => Buffer.from(`\u001b[${id}m`)