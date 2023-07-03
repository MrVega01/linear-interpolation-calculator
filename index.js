import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

const rl = readline.createInterface({ input, output });

(async function () {
  const x1 = await askNumber('Inserte X1: ')
  const x2 = await askNumber('Inserte X2: ')
  const y1 = await askNumber('Inserte Y1: ')
  const y2 = await askNumber('Inserte Y2: ')
  const x3 = await askNumber('Inserte el valor conocido de X: ')

  const m = (y2 - y1) / (x2 - x1)
  const n = (-1 * (m * x1)) + y1
  const y3 = (m * x3) + n

  console.log(`\nEl valor Y interpolado es ${y3}`)
  console.log(`${x1} | ${x2} | ${x3}\n${y1} | ${y2} | ${y3}`)

  rl.close()
})()

async function askNumber (question) {
  return Number(await rl.question(question).then(async data => {
    if (isNaN(data)) {
      console.log('Debe insertar valores numéricos válidos')
      return await askNumber(question)
    } else return data
  }))
}
