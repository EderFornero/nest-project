import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  async findAll() {
    return [
      { id: 1, name: 'eder' },
      { id: 2, name: 'pepe' },
    ];
  }

  // @Get('ab*cd')
  // async findAll() {
  //   return 'This route uses a wildcard';
  // }

  @Get(':id')
  @HttpCode(HttpStatus.FOUND)
  async findById(@Param('id') id: string) {
    return {
      id,
    };
  }
}
