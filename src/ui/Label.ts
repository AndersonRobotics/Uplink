import { Writable } from 'stream'
import { Drawable } from './Drawable'
import { CURSOR_SET, FORMAT } from './ANSI'

export class Label implements Drawable {
  private pos_x: Number
  private pos_y: Number
  private text: String
  private format: Number

  constructor (x?: Number, y?: Number, text?: String, format?: Number) {
    this.pos_x = x || 1
    this.pos_y = y || 1
    this.text = text || ''
    this.format = format || 0
  }

  public setX (x: Number) {
    this.pos_x = x
  }

  public setY (y: Number) {
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