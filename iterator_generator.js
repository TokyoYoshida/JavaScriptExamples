// Iterator / Generator example


// Iterator example

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

// Generator function

function* makeIterator() {
  yield 1
  yield 2
}

const it2 = makeIterator()

for (const x of it2) {
  console.log('★DEBUG ', x)
}