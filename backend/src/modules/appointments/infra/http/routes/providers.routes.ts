import { Router } from 'express';

import EnsureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';

const providersRouter = Router();

const providersController = new ProvidersController();

providersRouter.use(EnsureAuthenticated);

providersRouter.get('/', providersController.show);

export default providersRouter;
