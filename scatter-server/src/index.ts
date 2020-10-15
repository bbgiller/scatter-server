import * as express from 'express'
import * as cors from 'cors'

const app = express()

app.use(cors())

app.listen(3333, () => {
  console.log(`scatter is live`)
})

export default app