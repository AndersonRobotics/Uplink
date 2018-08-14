import { Writable } from 'stream'

export interface Drawable {
  draw (stream: Writable): void
}