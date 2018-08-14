import { stdout, stdin } from 'process'
import { Page } from './ui/Page'
import { Label } from './ui/Label'
import { UP, DOWN, RIGHT, LEFT, CTRLC } from './Keys'

let page = new Page

page.attachChild(new Label(1, 1, 'hello', 31))
page.attachChild(new Label(2, 2, 'hello', 32))
page.attachChild(new Label(3, 3, 'hello', 33))

page.draw(stdout)

stdin.setRawMode(true)

stdin.addListener('data', buf => {
  if (buf.equals(UP)) console.log('up')
  else if (buf.equals(DOWN)) console.log('down')
  else if (buf.equals(RIGHT)) console.log('right')
  else if (buf.equals(LEFT)) console.log('left')
  else if (buf.equals(CTRLC)) process.exit()
  else console.log(buf)
})
