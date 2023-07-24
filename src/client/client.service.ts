import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { } from 'prisma/prisma-client'

@Injectable()
export class ClientService {
    constructor(private readonly prismaService: PrismaService) { }

    async createClient(body) {
        const client = await this.prismaService.client.create({
            data: {
                name: body.name,
                client_code: body.client_code,
            }
        })
        const clientDetails = await this.prismaService.clientDetails.create({
            data: {
                incorporation_date: body.incorporation_date,
                fee: body.fee,
                from_date: body.from_date,
                to_date: body.to_date,
                pan: body.pan,
                gstn: body.gstn,
                tin: body.tin,
                cin: body.cin,
                std: body.std,
                land_line: body.land_line,
                website: body.website,
                job_code: body.job_code,
                status: body.status,
                category_id: body.category_id,
                job_department_id: body.job_department_id,
                department_id: body.department_id,
                client_id: client.id,
                admin_email: body.email,
                admin_first_name: body.first_name,
                admin_last_name: body.last_name,
                admin_middle_name: body.middle_name,
                admin_mobile_number: body.mobile_number
            }
        })
        const location = await this.prismaService.location.create({
            data: {
                address_1: body.address_1,
                address_2: body.address_2,
                location: body.location,
                location_type: body.location_type,
                pincode: body.pincode,
                city: body.city,
                state: body.state,
                country: body.country,
                client_details_id: clientDetails.id
            }
        })
        return { client, clientDetails, location }
    }

    async getCleints() {
        const response = await this.prismaService.clientDetails.findMany({
            select: {
                id: true,
                is_delete: true,
                incorporation_date: true,
                fee: true,
                from_date: true,
                to_date: true,
                pan: true,
                gstn: true,
                tin: true,
                cin: true,
                std: true,
                land_line: true,
                website: true,
                job_code: true,
                status: true,
                category_id: true,
                category: {
                    select: {
                        id: true,
                        name: true,
                        description: true,
                    }
                },
                job_department_id: true,
                job_department: {
                    select: {
                        id: true,
                        name: true,
                        activity_code: true,
                    }
                },
                department_id: true,
                department: {
                    select: {
                        id: true,
                        name: true,
                        description: true,
                    }
                },
                client_id: true,
                client: {
                    select: {
                        id: true,
                        name: true,
                        client_code: true,
                    }
                },
                locations: {
                    select: {
                        id: true,
                        address_1: true,
                        address_2: true,
                        location: true,
                        location_type: true,
                        pincode: true,
                        city: true,
                        state: true,
                        country: true,
                    }
                }
            }
        })
        const filteredClients = response.filter(client => (client.is_delete === "No"))
        return filteredClients
    }

    async getClient(id: number) {
        const client = await this.getClientById(id)
        if (client.is_delete === "Yes") throw new NotFoundException({ message: 'There is no client on this id' })
        const response = await this.prismaService.clientDetails.findUnique({
            where: {
                id,
            },
            select: {
                id: true,
                incorporation_date: true,
                fee: true,
                from_date: true,
                to_date: true,
                pan: true,
                gstn: true,
                tin: true,
                cin: true,
                std: true,
                land_line: true,
                website: true,
                job_code: true,
                status: true,
                category_id: true,
                category: {
                    select: {
                        id: true,
                        name: true,
                        description: true,
                    }
                },
                job_department_id: true,
                job_department: {
                    select: {
                        id: true,
                        name: true,
                        activity_code: true,
                    }
                },
                department_id: true,
                department: {
                    select: {
                        id: true,
                        name: true,
                        description: true,
                    }
                },
                client_id: true,
                client: {
                    select: {
                        id: true,
                        name: true,
                        client_code: true,
                    }
                },
                locations: {
                    select: {
                        id: true,
                        address_1: true,
                        address_2: true,
                        location: true,
                        location_type: true,
                        pincode: true,
                        city: true,
                        state: true,
                        country: true,
                    }
                }
            }
        })
        return response
    }

    async updateClientDetails(body, id: number,) {
        const client = await this.getClientById(id)
        if (client.is_delete === "Yes") throw new NotFoundException({ message: 'There is no client on this id' })
        const updatedClient = await this.prismaService.client.update({
            where: {
                id
            },
            data: {
                name: body.name,
                client_code: body.client_code
            }
        })
        const updatedClientDetails = await this.prismaService.clientDetails.update({
            where: {
                client_id: id,
            },
            data: {
                incorporation_date: body.incorporation_date,
                fee: body.fee,
                from_date: body.from_date,
                to_date: body.to_date,
                pan: body.pan,
                gstn: body.gstn,
                tin: body.tin,
                cin: body.cin,
                std: body.std,
                land_line: body.land_line,
                website: body.website,
                job_code: body.job_code,
                status: body.status,
                category_id: body.category_id,
                job_department_id: body.job_department_id,
                department_id: body.department_id,
                admin_email: body.email,
                admin_first_name: body.first_name,
                admin_last_name: body.last_name,
                admin_middle_name: body.middle_name,
                admin_mobile_number: body.mobile_number
            }
        })
        return { updatedClient, updatedClientDetails }
    }

    async updateClientLocation(body, clientId: number, locationId: number) {
        const client = await this.getClientById(clientId)
        if (client.is_delete === "Yes") throw new NotFoundException({ message: 'There is no client on this id' })
        const updatedClientLocation = await this.prismaService.location.update({
            where: {
                id: locationId,
                client_details_id: clientId,
            },
            data: {
                address_1: body.address_1,
                address_2: body.address_2,
                location: body.location,
                location_type: body.location_type,
                pincode: body.pincode,
                city: body.city,
                state: body.state,
                country: body.country
            }
        })
        return updatedClientLocation
    }

    async deleteClient(id: number) {
        const client = await this.getClientById(id)
        if (client.is_delete === "Yes") throw new NotFoundException({ message: 'There is no client on this id' })
        const deletedClient = await this.prismaService.client.update({
            where: {
                id
            },
            data: {
                is_delete: "Yes"
            }
        })
        const deletedClientDetails = await this.prismaService.clientDetails.update({
            where: {
                client_id: id,
            },
            data: {
                is_delete: "Yes"
            }
        })
        const deletedClientLocations = await this.prismaService.location.updateMany({
            where: {
                client_details_id: deletedClientDetails.id
            },
            data: {
                is_delete: "Yes"
            }
        })
        return { deletedClient, deletedClientDetails, deletedClientLocations }
    }

    async getClientById(id: number) {
        const response = await this.prismaService.clientDetails.findUnique({
            where: {
                id,
            }
        })
        return response
    }
}
