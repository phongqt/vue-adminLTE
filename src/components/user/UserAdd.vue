<template>
  <div class="box box-default">
      <div class="box-body">
          <form v-on:submit.prevent="onSubmit">
              <div class="row">
                  <div class="col-md-6">
                      <div class="form-group">
                          <label>User Name </label>
                          <input class="form-control" type="text" placeholder="User name" v-model="user.username" v-validate="'required|min:5'" name="username">
                          <div class="alert alert-danger" v-if="errors.has('username')">{{errors.first('username')}}</div>
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
                      <div class="form-group">
                          <label>Email </label>
                          <input class="form-control" type="text" placeholder="Email" v-model="user.email" v-validate="'required|email'" name="email">
                          <div class="alert alert-danger" v-if="errors.has('email')">{{errors.first('email')}}</div>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="form-group">
                          <label>Password </label>
                          <input class="form-control" type="password" placeholder="Password" v-model="user.password" v-validate="'required|min:6'" name="password">   
                          <div class="alert alert-danger" v-if="errors.has('password')">{{errors.first('password')}}</div>                                         
                      </div>
                      <div class="form-group">
                          <label>Password confirm</label>
                          <input class="form-control" type="password" placeholder="Password confirm" v-model="user.confirmpassword" v-validate="'required|min:6'" name="confirmpassword">
                          <div class="alert alert-danger" v-if="errors.has('confirmpassword')">{{errors.first('confirmpassword')}}</div>                        
                      </div>

                      <div class="form-group">
                          <label>Address </label>
                          <textarea rows="3" class="form-control" placeholder="Address" name="Address" v-model="user.address"></textarea>
                      </div>
                      <button type="submit" class="btn btn-success" :disabled="!formDirty || errors.any()">Submit</button>
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
          password: '',
          confirmpassword: '',
          address: ''
        }
      }
    },
    computed: {
      formDirty () {
        return Object.keys(this.fields).some(key => this.fields[key].dirty)
      }
    },
    methods: {
      onSubmit () {
        this.$validator.validateAll().then(() => {
          let model = {
            UserName: this.user.username,
            Password: this.user.password,
            FirstName: this.user.firstname,
            LastName: this.user.lastname,
            Email: this.user.email,
            Address: this.user.address
          }
          UserService.addUser(model).then(res => {
            if (res.success) {
              this.$router.push({name: '/'})
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
