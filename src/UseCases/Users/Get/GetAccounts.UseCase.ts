import { Injectable } from '@nestjs/common';

import { IGetAccountsDTO } from './DTO/IGetAccountsDTO';
import { UsersRepository } from 'src/repositories/prisma/Users/IPrismaUsersRepository';

@Injectable()
export class GetAccountsUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ name, page, pageSize }: IGetAccountsDTO) {
    const resultGet = await this.usersRepository.getAll({
      name,
      page,
      pageSize,
    });

    return {
      data: {
        accounts: resultGet,
      },
      message: 'success',
    };
  }
}
