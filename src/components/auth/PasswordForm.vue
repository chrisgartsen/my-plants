<template>
  <div class="card">
    <div class="card-body">
      <header class="card-header">
        <h3>Change password</h3>
      </header>

      <section class="card-content">
        <div class="form-component">
          <input type="password" name="password" id="password1" placeholder="" />
          <label for="password1">Current Password</label>
        </div>
        <div class="form-component">
          <input type="password" name="password" id="password2" placeholder="" />
          <label for="password2">New Password</label>
        </div>
        <div class="form-component">
          <input type="password" name="password" id="password3" placeholder="" />
          <label for="password3">Confirm Password</label>
        </div>
        <div class="button-group">
          <button class="btn-primary">Change password</button>
        </div>
      </section>
    </div>
  </div>
</template>
