// Iterator / Generator example

// Iterator

(() => {
  // Simple Iterator
  console.log('## Simple Iterator ')
  const makeIterator = () => {
    let index = 0
    const myIterator = {
      next: () => {
        if (index <= 10) {
          const result = { value: index, done: false }
          index += 1
          return result
        }
        return { value: index, done: true }
      }
    }
    return myIterator
  }

  const it = makeIterator()

  it.next()
  const r = it.next()
  console.log('★DEBUG ', r)
})();

(() => {
  // Iterable Object
  console.log('## Iterable Object')
  let it = {}

  // Iterable object needs [Symbol.iterator]() method returns iterator.
  it[Symbol.iterator] = () => {
    let index = 0
    const myIterator = {
      next: () => {
        if (index <= 10) {
          const result = { value: index, done: false }
          index += 1
          return result
        }
        return { value: index, done: true }
      }
    }
    return myIterator
  }

  for (const x of it) {
    console.log('★DEBUG ',x)
  }
})();

(() => {
  // Generator function
  console.log('## Generator function')

  function* makeIterator() {
    yield 1
    yield 2
  }

  const it = makeIterator()

  for (const x of it) {
    console.log('★DEBUG ', x)
  }
})();
