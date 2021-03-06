import { Router } from 'express';
import { usersRouter } from './usersRouter';
import { postRouter } from './postsRouter';
import { commentRouter } from './commentsRouter';
import { authRouter } from './authRouter';

export const routes = Router();

routes.use('/users', usersRouter);
routes.use('/posts', postRouter);
routes.use('/comments', commentRouter);
routes.use('/auth', authRouter);

// @ts-ignore
routes.use('*', (err, req, res, next) => {
    res.status(err.status || 500)
        .json({ message: err.message });
});
