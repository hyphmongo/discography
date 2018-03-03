import mockApp from './mockApp';

export default async query => {
  const app = await mockApp();
  const {body} = await app.post('/').send({query});
  expect(body).toMatchSnapshot();
};
