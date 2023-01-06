import Express from 'express'
import { PrismaClient } from '@prisma/client'

async function bootstrap() {
   const app = Express()
   
   const client = new PrismaClient()

   app.use(Express.json())
   

    
   app.get('/first-page', async (req, res) => {
      const firstContent = await client.firstPage.findUnique({
         where: {
            id: "d124acef-459c-4420-bee3-101cd496dede"
         }
      })
      
      const secondContent = await client.firstPage.findUnique({
         where: {
            id: "b7694a40-0538-4409-8642-574783bbe95d"
         }
      })

      const first = {
         firstContent,
         secondContent
      }

      res.send(first)
   })

   app.listen(3333, () => console.log('Server is running on localhost:3333'))
}

bootstrap()