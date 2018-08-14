import { Writable } from 'stream'
import { Drawable } from './Drawable'
import { CLEAR, CURSOR_SET } from './ANSI'

export class Page implements Drawable {
  private children: Drawable[]

  constructor (children?: Drawable[]) {
    this.children = children || []
  }

  public attachChild (...child: Drawable[]): void {
    this.children.push(...child)
  }

  public draw (stream: Writable): void {
    stream.write(CURSOR_SET(1, 1))
    stream.write(CLEAR)

    for (const child of this.children) {
      child.draw(stream)
    }
  }
}