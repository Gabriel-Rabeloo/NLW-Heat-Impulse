import { serverHttp } from './app';

const port = process.env.PORT || 4000;

serverHttp.listen(4000, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
