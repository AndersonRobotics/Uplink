import { Writable } from 'stream'
import { Drawable } from './Drawable'
import { CURSOR_SET, FORMAT } from './ANSI'

export class Label implements Drawable {
  private pos_x: number
  private pos_y: number
  private text: String
  private format: number

  constructor (x?: number, y?: number, text?: String, format?: number) {
    this.pos_x = x || 1
    this.pos_y = y || 1
    this.text = text || ''
    this.format = format || 0
  }

  public setX (x: number) {
    this.pos_x = x
  }

  public setY (y: number) {
    this.pos_y = y
  }

  public setText (text: String) {
    this.text = text
  }

  public draw (stream: Writable): void {
    stream.write(CURSOR_SET(this.pos_x, this.pos_y))
    stream.write(FORMAT(this.format))
    stream.write(this.text)
  }
}