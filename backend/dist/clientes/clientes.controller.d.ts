import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
export declare class ClientesController {
    private readonly clientesService;
    constructor(clientesService: ClientesService);
    create(createClienteDto: CreateClienteDto): Promise<CreateClienteDto & import("./entities/cliente.entity").Cliente>;
    findAll(): Promise<import("./entities/cliente.entity").Cliente[]>;
    findOne(id: string): Promise<import("./entities/cliente.entity").Cliente>;
    update(id: string, updateClienteDto: UpdateClienteDto): string;
    remove(id: string): string;
}
