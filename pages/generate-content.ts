import { faker } from '@faker-js/faker'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

function GenerateContent() {
  async function addContent() {
    let i

    for (i = 0; i < 100; i++) {
      const postData = {
        Title: faker.lorem.sentence(),
        Content: faker.lorem.paragraphs(),
      }

      const generate = await fetch(`${publicRuntimeConfig.API_URL}/posts`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      })

      const generateResponse = await generate.json()

      console.log(generateResponse)
    }
  }

  return (
    <div>
      <button type="button" onClick={() => addContent()}>
        Generate Strapi Content
      </button>
    </div>
  )
}

export default GenerateContent
