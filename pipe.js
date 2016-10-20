import iter from './iter'

export default function* pipe (gen) {
  const source = this.constructor.name === 'GeneratorFunction' ? this : this::iter
  yield* gen(source())
}

