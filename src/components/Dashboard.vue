<template>
    <div class="row">
    <div class="col-md-12">
        <div class="box">
            <div class="box-header with-border">
                <h3 class="box-title">
                <router-link v-bind:to="'/user-add'" class="btn btn-primary">Add new</router-link></h3>
            </div>
            <div class="box-body">
              <form action="#" method="get" class="sidebar-form">
                <div class="input-group">
                  <input type="text" name="q" class="form-control bg-search" placeholder="Search..." v-model="searchQuery">
                  <span class="input-group-btn">
                    <button type="submit" name="search" id="search-btn" class="btn btn-flat bg-search"><i class="fa fa-search"></i>
                    </button>
                  </span>
                </div>
              </form>
              <grid-component v-bind:filter-key="searchQuery" v-bind:columns="gridColumns" v-bind:list="list" v-bind:sortKey="sortByKey" v-on:sort-by="sort" v-on:edit-item="edit" v-on:remove-item="remove"></grid-component>
              <div class="text-center">                    
              </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
  import UserService from '@/services/user'
  import GridComponent from '@/components/Grid'
  export default {
    components: {
      GridComponent
    },
    data: function () {
      return {
        gridColumns:
        [
          {name: 'UserName', text: 'User Name'},
          {name: 'FirstName', text: 'First Name'},
          {name: 'LastName', text: 'Last Name'},
          {name: 'Email', text: 'Email'}
        ],
        list: null,
        sortByKey: {name: 'UserName', value: 1},
        page: 1,
        limit: 10,
        searchQuery: ''
      }
    },
    methods: {
      getAll: function () {
        UserService.getAll(this.page, this.limit, this.sortByKey.name, this.sortByKey.value === 0).then(res => {
          if (res.success) {
            this.list = res.data
          }
        })
      },
      sort: function (item) {
        this.sortByKey = item
        this.page = 1
        this.limit = 10
        this.getAll()
      },
      edit: function (item) {
        this.$router.push({name: 'UserEdit', params: {id: item._id}})
      },
      remove: function (item) {
        if (confirm('Are you sure you want to delete this user?')) {
          UserService.removeUser(item._id).then(res => {
            if (res.success) {
              this.getAll()
            } else {
              alert(res.message)
            }
          })
        }
      }
    },
    created: function () {
      this.getAll()
    }
  }
</script>
