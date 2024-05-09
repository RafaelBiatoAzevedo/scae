<script setup lang="ts">
  import FacebookIcon from "vue-material-design-icons/Facebook.vue";
  import IntagramIcon from "vue-material-design-icons/Instagram.vue";
  import LinkedinIcon from "vue-material-design-icons/Linkedin.vue";
  import YoutubeIcon from "vue-material-design-icons/Youtube.vue";

  {
    FacebookIcon;
    IntagramIcon;
    LinkedinIcon;
    YoutubeIcon;
  }
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-menu">
      <img src="/src/assets/scaeIcon.svg" alt="scae-icon">
      <div class="wrapper-links">
        <a href="https://scae.adm.br/" target="_blank">https://scae.adm.br/</a>
        <a href="https://scae.adm.br/" target="_blank"><FacebookIcon :size="30" fillColor="#ffffff" /></a>
        <a href="https://scae.adm.br/" target="_blank"><IntagramIcon :size="30" fillColor="#ffffff" /></a>
        <a href="https://scae.adm.br/" target="_blank"><LinkedinIcon :size="30" fillColor="#ffffff" /></a>
        <a href="https://scae.adm.br/" target="_blank"><YoutubeIcon :size="30" fillColor="#ffffff" /></a>
      </div>
    </div>
    <div class="wrapper-login">
      <div>
        <p>Seja bem-vindo(a) ao</p>
        <p>SISTEMA PARA GESTÃO DE LOTEAMENTOS</p>
        <img src="/src/assets/novaricalIcon.png" alt="scae-icon">
      </div>
      <form>
        <input>
        <input>
        <div class="wrapper-remenber">
          <button>
            [] Lembrar meu usuário
          </button>
          <button class="btn-submit" type="submit">ENTRAR</button>
        </div>
        <p>Esqueceu sua senha?</p>
      </form>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  background-image: url(/src/assets//backgroundLogin.png);
  background-size: cover;
  width: 100vw;
  height: 100vh;
  padding: 4rem;
  gap: 10px;
}

.wrapper-menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.wrapper-links {
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
}

.wrapper-links>a {
  text-decoration: none;
  color: #ffffffff;
}

.wrapper-login {
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 464px;
  height: 552px;
  border-radius: 16px;
  margin: 80px 200px;
  padding: 2rem;
  gap: 16px;
  background: linear-gradient(to bottom, rgb(255,255,255,1), 60%, rgb(255,255,255,0.3)), 40%;
}

.wrapper-login>div>p:nth-child(2) {
  font-weight: bold;
}

.wrapper-login>div {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.wrapper-login>div:first-child>img {
  width: 140px;
  height: 100px;
}

form {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  border: solid red;
}

.btn-submit {
  padding: 10px;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  background-color: #676668;
  color: #ffffffff;
  border: none;
}

.wrapper-remenber {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>

