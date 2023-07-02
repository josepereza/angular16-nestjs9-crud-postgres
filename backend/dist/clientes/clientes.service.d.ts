import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';
export declare class ClientesService {
    private clientesRepository;
    constructor(clientesRepository: Repository<Cliente>);
    create(createClienteDto: CreateClienteDto): Promise<CreateClienteDto & Cliente>;
    findAll(): Promise<Cliente[]>;
    findOne(id: any): Promise<Cliente>;
    update(id: number, updateClienteDto: UpdateClienteDto): string;
    remove(id: number): string;
}
