<template>
     <div class="pesawat">
      <div class="mtr">
    <form @submit.prevent="add"  ><br/><br/>
        <input type="hidden" v-model="form.id" required>
        <label for="" style="margin-right:10px">Jenis</label><br>
        <input type="text" v-model="form.merk" required><br /><br/>
        <label for=""   style="margin-right:10px">tipe</label><br>
        <input type="text" v-model="form.tipe" required><br /><br/>
        <label for="" style="margin-right:10px">Rute</label><br>
        <input type="text" v-model="form.bahan" required><br /><br/>
        <label for="" style="margin-right:10px">Hari</label><br>
        <input type="text" v-model="form.hari" required><br /><br/>
        <label for="" style="margin-right:10px">Jam</label><br>
        <input type="text" v-model="form.Jam" required><br /><br/>
         <label for="" style="margin-right:10px">Harga tiket</label><br>
        <input type="text" v-model="form.harga" required><br /><br/>
         <label for="" style="margin-right:10px">Image</label><br>
        <input type="text" v-model="form.image" required><br><br /> <button type="submit" v-show="!updateSubmit">add <i class="fas fa-search-plus"></i></button> <!-- jika tidak update maka tombol update tidak muncul --> 
        <button type="button" v-show="updateSubmit" @click="update(form)">Update <i class="fas fa-wrench"></i></button> <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
    </form>
      </div>
    <br/><br/>  
    <table class="border">
      <tr>
        <th>Jenis Pesawat</th>
        <th>Tipe</th>
        <th>Rute</th>
        <th>Hari keberangkatan</th>
        <th>Jam keberangkatan</th>
        <th>Harga tiket</th>
        <th>Image</th>
        <th>Aksi</th>
        </tr> 
        <tr v-for="user in keretas" :key="user.id">
        <td>{{ user.merk }}</td>
        <td>{{ user.tipe }}</td>
        <td>{{ user.bahan }}</td>
        <td>{{ user.hari }}</td>
        <td>{{ user.Jam }}</td>
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
          hari: '',
          Jam: '',
          harga: '',
          image: '',
        },
        keretas: '',
        updateSubmit: false
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load(){
        axios.get('http://localhost:3000/keretas').then(res => {
        this.keretas = res.data //respon dari rest api dimasukan ke keretas
      }).catch ((err) => {
        console.log(err);
      })
    },
    add(){
      axios.post('http://localhost:3000/keretas/', this.form).then(res => {
          this.load()
          this.form.id = '';
          this.form.merk = '';
          this.form.tipe = '';
          this.form.bahan = '';
          this.form.hari = '';
          this.form.Jam = '';
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
        this.form.hari = user.hari 
        this.form.Jam = user.Jam 
        this.form.harga = user.harga 
        this.form.image = user.image 
 },
 update(form){
        return axios.put('http://localhost:3000/keretas/' + form.id , {merk: this.form.merk, tipe: this.form.tipe, bahan: this.form.bahan, hari:this.form.hari ,Jam: this.form.Jam, harga: this.form.harga, image: this.form.image}).then(res => {
        this.load()
        this.form.id = ''
        this.form.merk = ''
        this.form.tipe = ''
        this.form.bahan = ''
        this.form.hari = ''
        this.form.Jam = ''
        this.form.harga = ''
        this.form.image = ''
        this.updateSubmit = false
      }).catch((err) => {
        console.log(err);
        
      })
    },
    del(user){
      axios.delete('http://localhost:3000/keretas/' + user.id ).then(res =>{
          this.load()
          let index = this.keretas.indexOf(
            form.merk,
            form.tipe,  
            form.bahan,
            form.hari,
            form.Jam,
            form.harga,           
            form.image,           
          )
          this.keretas.splice(index,1)
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
.pesawat{
  margin-left: 10%;
}
</style>