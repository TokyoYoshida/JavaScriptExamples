// Iterator / Generator example

// Iterator
{
makeIterator1 = () => {
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



// Iterable Object

let it2 = {}

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

for (const x of it2) {
  console.log('★DEBUG ',x)
}

// Generator function

function* makeIterator2() {
  yield 1
  yield 2
}

const it3 = makeIterator2()

for (const x of it3) {
  console.log('★DEBUG ', x)
}