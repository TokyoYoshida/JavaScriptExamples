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

(() => {
  // Iterable Object by Generator function
  console.log('## Iterable Object by Generator function')
  let it = {
    *[Symbol.iterator]() {
      yield 1
      yield 2
      yield 3
    }
  }

  for (const x of it) {
    console.log('★DEBUG ', x)
  }  
})();

(() => {
  // Permanent　Generator function
  console.log('## Permanent　Generator function')

  function* makeIterator() {
    let i = 0
    while(true) {
      i++
      yield i
    }
  }

  const it = makeIterator()

  it.next()
  it.next()
  it.next()
  let x = it.next()
  console.log('★DEBUG ', x)
})();
