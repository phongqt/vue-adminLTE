<template>
  <div class="box box-default">
      <div class="box-body">
          <form v-on:submit.prevent="onSubmit">
              <div class="row">
                  <div class="col-md-6">
                      <div class="form-group">
                          <label>User Name </label>
                          <input class="form-control" type="text" placeholder="User name" v-model="user.username" :disabled="true">
                      </div>
                      <div class="form-group">
                          <label>First Name </label>
                          <input class="form-control" type="text" placeholder="First name" v-model="user.firstname" v-validate="'required|alpha'" name="firstname">
                          <div class="alert alert-danger" v-if="errors.has('firstname')">{{errors.first('firstname')}}</div>                     
                      </div>
                      <div class="form-group">
                          <label>Last Name </label>
                          <input class="form-control" type="text" placeholder="Last name" v-model="user.lastname" v-validate="'required|alpha'" name="lastname">
                          <div class="alert alert-danger" v-if="errors.has('lastname')">{{errors.first('lastname')}}</div>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="form-group">
                          <label>Email </label>
                          <input class="form-control" type="text" placeholder="Email" v-model="user.email" :disabled="true">
                      </div>
                      <div class="form-group">
                          <label>Address </label>
                          <textarea rows="3" class="form-control" placeholder="Address" name="Address" v-model="user.address"></textarea>
                      </div>
                      <button type="submit" class="btn btn-success" :disabled="errors.any()">Submit</button>
                  </div>
              </div>
          </form>
      </div>
  </div>
</template>
<script>
  import UserService from '@/services/user'
  export default {
    data: function () {
      return {
        user: {
          username: '',
          firstname: '',
          lastname: '',
          email: '',
          address: ''
        }
      }
    },
    created: function () {
      this.getUserInfo()
    },
    methods: {
      getUserInfo () {
        UserService.getUserInfo(this.$route.params.id).then(res => {
          if (res.success) {
            let result = res.data
            for (var key in result) {
              console.log(this.user)
              if (this.user.hasOwnProperty(key.toLowerCase())) {
                this.user[key.toLocaleLowerCase()] = result[key]
              }
            }
          }
        })
      },
      onSubmit () {
        this.$validator.validateAll().then(() => {
          let model = {
            FirstName: this.user.firstname,
            LastName: this.user.lastname,
            Email: this.user.email,
            Address: this.user.address
          }
          UserService.updateUser(this.$route.params.id, model).then(res => {
            if (res.success) {
              this.$router.push({name: 'Admin'})
            } else {
              alert(res.message)
            }
          }).catch(err => {
            console.log(err)
          })
        }).catch(() => {
          alert('Correct them errors!')
        })
      }
    }
  }
</script>
