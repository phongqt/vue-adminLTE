<template>
    <div class="row">
    <div class="col-md-12">
        <div class="box">
            <div class="box-header with-border">
                <h3 class="box-title">
                <router-link v-bind:to="'/user-add'" class="btn btn-primary">Add new</router-link></h3>
            </div>
            <div class="box-body">
                <grid-component v-bind:columns="gridColumns" v-bind:list="list" v-bind:sortKey="sortByKey" v-on:sort-by="sort"></grid-component>
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
        limit: 10
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
      }
    },
    created: function () {
      this.getAll()
    }
  }
</script>
