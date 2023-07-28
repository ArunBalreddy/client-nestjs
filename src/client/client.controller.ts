import { Body, Controller, Post, Get, Put, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { CreateClientDto, ResponseDto, UpdateClientDto, UpdateClientLocationDto } from './dtos/client.dto'
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {

    constructor(private readonly clientService: ClientService) { }

    @Post()
    async createClient(
        @Body() body: CreateClientDto
    ) {
        return await this.clientService.createClient(body)
    }

    @Get()
    async getAllClients(): Promise<ResponseDto[]> {
        return await this.clientService.getClients()
    }

    @Get("/:id")
    async getClientById(
        @Param("id", ParseIntPipe) id: number
    ): Promise<ResponseDto> {
        const client = await this.clientService.getClient(id)
        return client
    }

    @Put("/:id")
    async updateClientDetails(
        @Param('id') id: number,
        @Body() body: UpdateClientDto) {
            console.log(body)
        return await this.clientService.updateClientDetails(body, id)
    }

    @Put("/:clientId/location/:id")
    async updateClientLocation(
        @Param('clientId') clinetId: number,
        @Param('id') locationId: number,
        @Body() body: UpdateClientLocationDto
    ) {
        await this.clientService.updateClientLocation(body, clinetId, locationId)
    }

    @Delete("/:id")
    async deleteClientDetails(@Param('id') id: number) {
        return await this.clientService.deleteClient(id)
    }
}
