<template>
  <div class="box box-default">
      <div class="box-body">
          <form>
              <div class="row">
                  <div class="col-md-6">
                      <div class="form-group">
                          <label>User Name </label>
                          <input class="form-control" type="text" placeholder="User name">
                      </div>
                      <div class="form-group">
                          <label>First Name </label>
                          <input class="form-control" type="text" placeholder="First name">                     
                      </div>
                      <div class="form-group">
                          <label>Last Name </label>
                          <input class="form-control" type="text" placeholder="Last name">
                      </div>
                      <div class="form-group">
                          <label>Email </label>
                          <input class="form-control" type="text" placeholder="Email">
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="form-group">
                          <label>Password </label>
                          <input class="form-control" type="password" placeholder="Password">                                            </div>
                      <div class="form-group">
                          <label>Password confirm</label>
                          <input class="form-control" type="password" placeholder="Password confirm">                        
                      </div>

                      <div class="form-group">
                          <label>Address </label>
                          <textarea rows="3" class="form-control" placeholder="Address" name="Address"></textarea>
                      </div>
                      <button type="submit" class="btn btn-success">Submit</button>
                  </div>
              </div>
          </form>
      </div>
  </div>
</template>
<script>
  export default {}
</script>
