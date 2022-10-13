<template>
     <div class="bus">
      <div class="bs">
    <form @submit.prevent="add"  ><br/><br/>
        <input type="hidden" v-model="form.id" required>
        <label for="" style="margin-right:10px">merk</label><br>
        <input type="text" v-model="form.merk" required><br /><br/>
        <label for=""  style="margin-right:10px" >Jenis Bus</label><br>
        <input type="text" v-model="form.tipe" required><br /><br/>
        <label for="" style="margin-right:10px">Rute</label><br>
        <input type="text" v-model="form.bahan" required><br /><br/>
         <label for="" style="margin-right:10px">Harga tiket</label><br>
        <input type="text" v-model="form.harga" required><br /><br/>
         <label for="" style="margin-right:10px">Image</label><br>
        <input type="text" v-model="form.image" required> <br><br /><button type="submit" v-show="!updateSubmit">add <i class="fas fa-search-plus"></i></button> <!-- jika tidak update maka tombol update tidak muncul --> 
        <button type="button" v-show="updateSubmit" @click="update(form)">Update<i class="fas fa-wrench"></i></button> <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
    </form>
      </div>
    <br/><br/>  
    <table class="border">
      <tr>
        <th>Merk</th>
        <th>Jenis Bus</th>
        <th>Rute</th>
        <th>Harga tiket</th>
        <th>Image</th>
        <th>Aksi</th>
        </tr> 
        <tr v-for="user in bus" :key="user.id">
        <td>{{ user.merk }}</td>
        <td>{{ user.tipe }}</td>
        <td>{{ user.bahan }}</td>
        <td>{{ user.harga }}</td>
        <td><img :src="user.image" alt="" width="150"></td>
          <td><button @click="edit(user)"><i class="fas fa-edit"></i> Edit</button> <button @click="del(user)"><i class="fas fa-trash-alt"></i> Delete</button></td>
        
        </tr>
    </table>
  </div>
</template>

<script>
/* eslint-disable */ 
import axios from 'axios'
export default {
  data(){
    return{
        form: {
          id: '',
          merk: '',
          tipe: '',
          bahan: '',
          harga: '',
          image: '',
        },
        bus: '',
        updateSubmit: false
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load(){
        axios.get('http://localhost:3000/bus').then(res => {
        this.bus = res.data //respon dari rest api dimasukan ke bus
      }).catch ((err) => {
        console.log(err);
      })
    },
    add(){
      axios.post('http://localhost:3000/bus/', this.form).then(res => {
          this.load()
          this.form.id = '';
          this.form.merk = '';
          this.form.tipe = '';
          this.form.bahan = '';
          this.form.harga = '';
          this.form.image = '';
      })
 },
 edit(user){ 
        this.updateSubmit = true
        this.form.id = user.id 
        this.form.merk = user.merk
        this.form.tipe= user.tipe  
        this.form.bahan = user.bahan 
        this.form.harga = user.harga 
        this.form.image = user.image 
 },
 update(form){
        return axios.put('http://localhost:3000/bus/' + form.id , {merk: this.form.merk, tipe: this.form.tipe, bahan: this.form.bahan, harga: this.form.harga, image: this.form.image}).then(res => {
        this.load()
        this.form.id = ''
        this.form.merk = ''
        this.form.tipe = ''
        this.form.bahan = ''
        this.form.harga = ''
        this.form.image = ''
        this.updateSubmit = false
      }).catch((err) => {
        console.log(err);
        
      })
    },
    del(user){
      axios.delete('http://localhost:3000/bus/' + user.id ).then(res =>{
          this.load()
          let index = this.bus.indexOf(
            form.merk,
            form.tipe,  
            form.bahan,           
            form.harga,           
            form.image,           
          )
          this.bus.splice(index,1)
      })
  }
   }
  }
</script>

<style>
.border {
  width: 100%;
}
th {
  border: 2px solid;
}
td {
  border: 2px solid;
}
.bus{
  margin-left: 10%;
}
.bs{
  text-align: center;
  color: white;
}
</style>