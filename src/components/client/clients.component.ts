import type { IClient } from "@/models/client.model";
import { Vue } from "vue-class-component";
import ClientService from "./clients.service";
import Swal from "sweetalert2";

export default class Clients extends Vue {
  private clientService: ClientService | null = null;
  public clients: IClient[] = [];

  public mounted(): void {
    this.clientService = new ClientService();
    this.retrieveClients();
  }

  public prepareToRemove(id: number): void {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        this.clientService
          ?.delete(id)
          .then((response) => {
            if (response.data.deleteClient == null) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
            } else {
              Swal.fire("Deleted!", "The client has been deleted.", "success");
              this.clients = [];
              this.retrieveClients();
            }
          })
      }
    });
  }

  private async retrieveClients(): Promise<IClient[]> {
    let response = await this.clientService?.retrieve();
    this.clients = response.data.getAllClients;
    return this.clients;
  }
}
