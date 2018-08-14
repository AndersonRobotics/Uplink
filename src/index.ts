import { stdout } from 'process'
import { Page } from './ui/Page'
import { Label } from './ui/Label'

let page = new Page

page.attachChild(new Label(1, 1, 'hello', 31))
page.attachChild(new Label(2, 2, 'hello', 32))
page.attachChild(new Label(3, 3, 'hello', 33))

page.draw(stdout)