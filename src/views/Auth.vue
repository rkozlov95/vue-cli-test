<template>
<div>
  <form ref="formdata" @submit.prevent="getFormData" class="border border-light shadow p-4 rounded" enctype="multipart/form-data">
    <div class="text-center">
      <h1>Вход в систему</h1>
      <p>Введите свои данные, чтобы продолжить:</p>
    </div>
    <div class="form-group">
      <input name="email" type="text" class="form-control form-control-lg" placeholder="E-mail">
    </div>
    <div class="form-group">
      <input name="password" type="text" class="form-control form-control-lg" placeholder="Пароль">
    </div>
    <div class="form-group form-check d-flex justify-content-between">
      <input type="checkbox" class="form-check-input" id="check-box">
      <label class="form-check-label" for="check-box">Запомнить меня</label>
      <router-link to="/reset">Забыли пароль?</router-link>
    </div>
    <button data-toggle="modal" data-target="#exampleModal" type="submit" class="btn btn-primary btn-lg btn-block mt-4">Войти</button>
  </form>
  <div class="modal fade bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Сообщение</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body text-center">
          {{ jsonData }}
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Auth',
  data() {
    return {
      jsonData: '',
    };
  },
  methods: {
    getFormData() {
      const formData = new FormData(this.$refs.formdata);
      const email = formData.get('email');
      const password = formData.get('password');
      if (email && password) {
        const data = Array.from(formData.entries()).reduce((memo, pair) => ({
          ...memo,
          [pair[0]]: pair[1],
        }), {});
        this.jsonData = JSON.stringify(data);
      } else {
        this.jsonData = 'Поле E-mail или Пароль не может быть пустым!';
      }
    }
  }
}
</script>
