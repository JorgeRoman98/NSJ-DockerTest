const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
      myapi: '1.0.0',
      info: {
        title: 'My API',
        version: '1.0.0',
        description: 'API documentation',
      },
      servers: [
        {
          url: 'http://localhost:3000',
        },
      ],
    },
    apis: ['routes/*.js'], // files containing annotations as above
  };

const swaggerDocs = swaggerJsdoc(swaggerOptions);

module.exports = {
    swaggerDocs,
    swaggerUi,
};