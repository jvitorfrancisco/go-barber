// import AppError from '@shared/errors/AppError';
import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

import AuthenticateUserService from './AuthenticateUserService';

let fakeUserRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let authenticateUserService: AuthenticateUserService;

describe('AuthenticateUsers', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    authenticateUserService = new AuthenticateUserService(
      fakeUserRepository,
      fakeHashProvider,
    );
  });

  it('should be able to Authenticate user', async () => {
    const user = await fakeUserRepository.create({
      name: 'Jhon Doe',
      email: 'jhondoe@example.com',
      password: 'senha',
    });

    const response = await authenticateUserService.execute({
      email: 'jhondoe@example.com',
      password: 'senha',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able to Authenticate non existent user', async () => {
    await expect(
      authenticateUserService.execute({
        email: 'jhondoe@example.com',
        password: 'senha',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to Authenticate user with incorrect password', async () => {
    await fakeUserRepository.create({
      name: 'Jhon Doe',
      email: 'jhondoe@example.com',
      password: 'senha',
    });

    await expect(
      authenticateUserService.execute({
        email: 'jhondoe@example.com',
        password: 'asdfgasdf',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
