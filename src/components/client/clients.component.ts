import type { IClient } from "@/models/client.model";
import { Vue } from "vue-class-component";
import ClientService from "./clients.service";

export default class Clients extends Vue{

    private clientService: ClientService = new ClientService();    
    public clients: IClient[] = [];

    public mounted(): void {
        this.retrieveClients();
    }
    
    

    private async retrieveClients(): Promise<IClient[]>{
        let response = await this.clientService.retrieve();
        this.clients = response.data.getAllClients;
        
        return this.clients;
    }
}