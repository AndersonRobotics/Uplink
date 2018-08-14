export interface Selector {
  getIndex (): number
  setIndex (to: number): void
  increment (by?: number): void
  decrement (by?: number): void
}

class GlobalSelector implements Selector {
  private index: number

  constructor (index: number) {
    this.index = index
  }

  getIndex (): number {
    return this.index
  }

  setIndex (to: number): void {
    this.index = to
  }

  increment (by?: number) {
    this.index = this.index + (by || 1)
  }

  decrement (by?: number) {
    this.index = this.index - (by || 1)
  }
}