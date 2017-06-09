<template>
  <div class="skin-blue sidebar-mini">
    <div class="wrapper">
      <header-component></header-component>
      <nav-menu-component></nav-menu-component>
      <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
        <h1>Dashboard<small>Version 2.0</small></h1>
        <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
          <li class="active">Dashboard</li>
        </ol>
        </section>

        <!-- Main content -->
        <section class="content">
        <!-- Info boxes -->                
          <router-view></router-view>
        <!-- /.row -->
        </section>
      <!-- /.content -->
      </div>

      <footer-component></footer-component>
    </div>
  </div>
</template>
<script>
  import HeaderComponent from '@/components/Header'
  import FooterComponent from '@/components/Footer'
  import NavMenuComponent from '@/components/NavMenu'
  export default {
    components: {
      HeaderComponent, FooterComponent, NavMenuComponent
    }
  }
</script>
<style>
.bg-search {
  background-color: #fff!important;
}
</style>
