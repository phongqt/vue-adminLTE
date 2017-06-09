<template>
	<table  class="table table-bordered">
		<thead>
			<tr>
        <th></th>
				<th v-for="col in columns" @click="sortBy(col.name)">{{col.text}}
          <span class="arrow" :class="sortOrders[col.name] > 0 ? 'asc' : 'dsc'"></span>
        </th>
        <th></th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(item, index) in filteredData">
        <td>{{ index + 1 }}</td>
				<td v-for="col in columns">{{item[col.name]}}</td>
        <td class="text-center">
          <a class="btn btn-success" @click="editIem(item)">  
              Edit  
          </a>
          <a class="btn btn-danger" @click="removeItem(item)">
              Delete  
          </a>
        </td>
			</tr>
		</tbody>
	</table>
</template>
<script>
export default {
  props: {
    list: Array,
    columns: Array,
    sortKey: Object,
    filterKey: String
  },
  data: function () {
    var sortOrders = {}
    this.columns.forEach(function (item) {
      sortOrders[item.name] = 1
    })

    return {
      sortOrders: sortOrders
    }
  },
  computed: {
    filteredData: function () {
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var data = this.list
      if (filterKey) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      return data
    }
  },
  created: function () {
    if (this.sortKey) {
      this.sortOrders[this.sortKey.key] = this.sortKey.value
    }
  },
  methods: {
    sortBy: function (key) {
      this.sortOrders[key] = Math.abs(this.sortOrders[key] - 1)
      this.sortKey.name = key
      this.sortKey.value = this.sortOrders[key]
      this.$emit('sort-by', this.sortKey)
    },
    editIem: function (item) {
      this.$emit('edit-item', item)
    },
    removeItem: function (item) {
      this.$emit('remove-item', item)
    }
  }
}
</script>
<style>
  th {
    text-align: center;
    background-color: #42b983;
    color: rgba(255,255,255,0.66);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: relative;
  }
  th.active {
    color: #fff;
  }

  th.active .arrow {
    opacity: 1;
  }

  .arrow {
    position: absolute;
    top:40%;
    right: 2%;
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    margin-left: 5px;
    opacity: 0.66;
  }

  .arrow.asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #fff;
  }

  .arrow.dsc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #fff;
  }
</style>
