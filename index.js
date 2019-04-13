import {Application} from "./src/main";

async function bootstrap() {
  const app = new Application();
  await app.init();
  let { action } = app.data;
  if(action === 'encrypt'){
    app.encode();
  } else if (action === 'decrypt') {
    app.decode();
  }
}

bootstrap();
