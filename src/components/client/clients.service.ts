import axios from "axios";

const baseUrl = "http://localhost:8081/graphql";

export default class ClientService {

  public retrieve(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      axios({
        url: baseUrl,
        method: "post",
        data: {
          query: `
                query {
                    getAllClients
                    {
                        id
                        CNE
                        firstName
                        lastName
                        phoneNumber
                        email
                        dateNaissance
                    }
                }
            `,
        },
      })
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  }

}
