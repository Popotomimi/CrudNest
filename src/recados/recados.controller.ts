import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { text } from 'stream/consumers';

@Controller('recados')
export class RecadosController {
    // Encontrar todos os recados
    @Get()
    findAll() {
        return 'Retorna todos os recados';
    }

    // Encontrar um recado
    @Get(':id')
    finOne(@Param('id') id: string) {
        return `Retorna um recado com id ${id}`;
    }

    // Criar um recado
    @Post()
    create(@Body() body: string) {
        return body;
    }
}
