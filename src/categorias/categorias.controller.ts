import {
  Controller,
  Body,
  Post,
  UsePipes,
  ValidationPipe,
  Get,
  Param,
} from '@nestjs/common';
import { CriarCategoriaDto } from './dtos/criar-categoria.dto';
import { Categoria } from './interfaces/categoria.interface';
import { CategoriasService } from './categorias.service';

@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async criarCategoria(
    @Body() criarCategoriaDto: CriarCategoriaDto,
  ): Promise<Categoria> {
    return await this.categoriasService.criarCategoria(criarCategoriaDto);
  }

  @Get()
  async consultarCategorias(): Promise<Array<Categoria>> {
    return await this.categoriasService.consultarTodasCategorias();
  }

  @Get('/:categoria')
  async consultarCategoriaPeloId(
    @Param('categoria') categoria: string,
  ): Promise<Categoria> {
    return await this.categoriasService.consultarCategoriaPeloId(categoria);
  }
}
