

export const options = {
    definition: {
      openapi: '3.0.0',
      info:{
        title: 'ImageGram API',
        version: '1.0.0',
        description: 'This is a simple crud api Application made with Express and documented with swagger',
      },
      servers: [
        {
          url: 'http://localhost:5000/api/v1  '
        }
      ]
    },
    apis: ['./src/routes/v1/*.js']
  }