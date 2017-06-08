<template>
  <div class="login-box">
    <div class="login-logo">
      <a href=""><b>Admin</b>LTE</a>
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">
      <form v-on:submit.prevent="onSubmit">
        <div class="form-group has-feedback">
          <input type="text" class="form-control" v-model="user.username" v-validate="'required|min:5'" name="username" placeholder="User name">
          <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
          <div class="alert alert-danger" v-if="errors.has('username')">{{errors.first('username')}}</div>
        </div>
        <div class="form-group has-feedback">
          <input type="password" class="form-control" v-model="user.password" v-validate="'required|min:6'" name="password" placeholder="Password">
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          <div class="alert alert-danger" v-if="errors.has('password')">{{errors.first('password')}}</div>
        </div>
        <div class="row">
          <div class="col-xs-8">
          </div>
          <!-- /.col -->
          <div class="col-xs-4">
            <button type="submit" class="btn btn-primary btn-block btn-flat" :disabled="!formDirty || errors.any()">Sign In</button>
          </div>
          <!-- /.col -->
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  import UserService from '@/services/user'
  import Token from '@/providers/token'
  export default {
    data: function () {
      return {
        user: {
          username: '',
          password: ''
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
            Password: this.user.password
          }
          UserService.login(model).then(res => {
            if (res.success) {
              Token.removeToken()
              Token.setToken(res.data)
              // this.$router.push({name: 'Admin'})
              location.href = '/'
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
