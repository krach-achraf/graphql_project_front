<template>
  <div class="dummy-text">
    <div class="card">
      <div class="card-body">
        <div class="table-responsive">
          <table id="dtBasicExample" class="table">
            <thead>
              <tr>
                <th scope="col">CNE</th>
                <th scope="col">First name</th>
                <th scope="col">Last name</th>
                <th scope="col">Phone number</th>
                <th scope="col">Email</th>
                <th scope="col">Date naissance</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="client in clients" :key="client.id">
                <td class="td">{{client.CNE}}</td>
                <td class="td">{{client.firstName}}</td>
                <td class="td">{{client.lastName}}</td>
                <td class="td">{{client.phoneNumber}}</td>
                <td class="td">{{client.email}}</td>
                <td class="td">{{client.dateNaissance?.toString().split("T")[0]}}</td>
                <td>
                  <button class="btn btn-secondary btn-sm" v-on:click="prepareToRemove(client.id)">
                    <fa icon="trash" size="lg"></fa>
                    </button> 
                  <button class="btn btn-dark btn-sm btn_edit">
                    <fa icon="edit" size="lg"></fa>
                    </button>
                </td>
              </tr>
           
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./clients.component.ts"></script>
