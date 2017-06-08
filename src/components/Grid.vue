<template>
	<table  class="table table-bordered">
		<thead>
			<tr>
				<th v-for="col in columns" @click="sortBy(col.name)">{{col.text}}
        <span class="arrow" :class="sortOrders[col.name] > 0 ? 'asc' : 'dsc'"></span>
        </th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="item in list">
				<td v-for="col in columns">{{item[col.name]}}</td>
			</tr>
		</tbody>
	</table>
</template>
<script>
export default {
  props: {
    list: Array,
    columns: Array,
    sortKey: Object
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
