import { Buffer } from 'buffer'

export const UP = Buffer.from([0x1B, 0x5B, 0x41])
export const DOWN = Buffer.from([0x1B, 0x5B, 0x42])
export const RIGHT = Buffer.from([0x1B, 0x5B, 0x43])
export const LEFT = Buffer.from([0x1B, 0x5B, 0x44])
export const CTRLC = Buffer.from([0x03])
export const W = Buffer.from([0x77])
export const A = Buffer.from([0x61])
export const S = Buffer.from([0x73])
export const D = Buffer.from([0x64])
export const SPACE = Buffer.from([0x20])