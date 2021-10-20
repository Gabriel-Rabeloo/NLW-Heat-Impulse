import { Router } from 'express';

import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateMessageController } from './controllers/CreateMessageController';
import { Get3LastMessagesController } from './controllers/GetLast3MessagesController';
import { ProfileUserController } from './controllers/ProfileUserController';
import { ensureAuthenticate } from './middleware/ensureAuthenticate';

const router = Router();

router.post('/api/authenticate', new AuthenticateUserController().handle);

router.post(
  '/api/messages',
  ensureAuthenticate,
  new CreateMessageController().handle,
);
router.get('/api/messages/last3', new Get3LastMessagesController().handle);

router.get(
  '/api/profile',
  ensureAuthenticate,
  new ProfileUserController().handle,
);

export { router };
