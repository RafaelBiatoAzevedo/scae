<script setup lang="ts">
  //@ts-ignore
  import FacebookIcon from "vue-material-design-icons/Facebook.vue";
   //@ts-ignore
  import IntagramIcon from "vue-material-design-icons/Instagram.vue";
   //@ts-ignore
  import LinkedinIcon from "vue-material-design-icons/Linkedin.vue";
   //@ts-ignore
  import YoutubeIcon from "vue-material-design-icons/Youtube.vue";
   //@ts-ignore
  import CheckboxBlankIcon from "vue-material-design-icons/CheckboxBlankOutline.vue";
   //@ts-ignore
  import CheckboxMarkedIcon from "vue-material-design-icons/CheckboxMarkedOutline.vue";
   //@ts-ignore
  import UserIcon from "vue-material-design-icons/FaceMan.vue";
   //@ts-ignore
  import EyeIcon from "vue-material-design-icons/Eye.vue";
   //@ts-ignore
  import EyeOffIcon from "vue-material-design-icons/EyeOff.vue";

  import { onBeforeMount, ref} from "vue";
  import { router } from "../router";
  import { SignInRequestDTO } from "../dtos/SignInRequestDTO";

  const isLoading = ref<boolean>(false);
  const isRemember = ref<boolean>(false);
  const isSecurity = ref<boolean>(true);
  const valuesSignin = ref({user: '', password: ''})

  const navigateFor = () => {
    router.push("/dashboard");
  };

  const changeValueInput = (e: any) => {
    valuesSignin.value = {...valuesSignin.value, [e.target.name]: e.target.value}
  }

  const handleSubmit = (values: SignInRequestDTO) => {
    isLoading.value = true;

    const strIsRemember = JSON.stringify(isRemember.value);
    window.localStorage.setItem("@scae:isRemember", strIsRemember);

    if (isRemember.value) {
      window.localStorage.setItem("@scae:user", valuesSignin.value.user);
      window.localStorage.setItem("@scae:password", valuesSignin.value.password);
    } else {
      window.localStorage.removeItem("@scae:user");
      window.localStorage.removeItem("@scae:password");
    }

    try {
      //function singnin scae request with data values, the next function
      console.log(values)
      // and navigate for home scae or other pages, the next function
      navigateFor();
    } catch (error) {
      //message error for nothing credentials
      console.log(error)
    }
  }

  const  handleToggleRemember = () => {
    isRemember.value = !isRemember.value;
  }

  const handleToggleSecurity = () =>  {
    isSecurity.value = !isSecurity.value;
  }

  console.log("fora monted",isRemember.value)

   onBeforeMount(() => {
    const  userItemStorage = window.localStorage.getItem("@scae:user");
    const  passwordItemStorage = window.localStorage.getItem("@scae:password");
    const  isRememberStorage = window.localStorage.getItem("@scae:isRemember");


    if (userItemStorage && passwordItemStorage) {
      valuesSignin.value = {user: userItemStorage, password: passwordItemStorage}
    }

    if (isRememberStorage) {
      isRemember.value = JSON.parse(isRememberStorage);
    } else {
      isRemember.value = false;
    }
  })
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-menu">
      <img src="/src/assets/scaeIcon.svg" alt="scae-icon">
      <div class="wrapper-links">
        <a href="https://scae.adm.br/" target="_blank">https://scae.adm.br/</a>
        <div class="wrapper-links-social">
          <a href="https://scae.adm.br/" target="_blank"><FacebookIcon :size="30" fillColor="#F7CF92" /></a>
          <a href="https://scae.adm.br/" target="_blank"><IntagramIcon :size="30" fillColor="#F7CF92" /></a>
          <a href="https://scae.adm.br/" target="_blank"><LinkedinIcon :size="30" fillColor="#F7CF92" /></a>
          <a href="https://scae.adm.br/" target="_blank"><YoutubeIcon :size="30" fillColor="#F7CF92" /></a>
        </div>
      </div>
    </div>
    <div class="wrapper-login">
      <div>
        <p>Seja bem-vindo(a) ao</p>
        <h1>SISTEMA PARA GESTÃO DE LOTEAMENTOS</h1>
        <img src="/src/assets/novaricalIcon.png" alt="scae-icon">
      </div>
      <form>
        <div class="wrapper-input">
          <input placeholder="Usuário" name="user" @change="(e) => changeValueInput(e)" v-bind:value="valuesSignin.user" type="text" autocapitalize={false} autocomplete={false} autofocus >
          <UserIcon :size="20" fillColor="#676668"/>
        </div>
        <div class="wrapper-input">
          <input v-if="isSecurity" placeholder="Senha" name="password" v-bind:value="valuesSignin.password" type="password" @change="(e) => changeValueInput(e)">
          <input v-if="!isSecurity" placeholder="Senha" name="password" v-bind:value="valuesSignin.password" type="text" @change="(e) => changeValueInput(e)">
          <button class="btn-security" type="button" @click="handleToggleSecurity">
            <EyeIcon :size="20" v-if="!isSecurity" fillColor="#676668"/>
            <EyeOffIcon :size="20" v-if="isSecurity" fillColor="#676668"/>
          </button>
        </div>
        <div class="wrapper-remember">
          <button class="btn-remember" type="button" @click="handleToggleRemember">
            <CheckboxBlankIcon :size="20" v-if="!isRemember"/>
            <CheckboxMarkedIcon :size="20" v-if="isRemember"/>
            Lembrar meu usuário
          </button>
          <button class="btn-submit" type="submit" @click="() => handleSubmit(valuesSignin)">ENTRAR</button>
        </div>
        <a href="https://scae.adm.br/" target="_blank">Esqueceu sua senha?</a>
      </form>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  background-image: url(/src/assets//backgroundLogin2.jpg);
  background-size: cover;

  width: 100vw;
  height: 100vh;
  padding: 3rem;
  gap: 10px;
}

.wrapper-menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.wrapper-links, .wrapper-links-social {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
}

.wrapper-links>a:first-child {
  margin-right: 2rem;
}

.wrapper-links>a {
  text-decoration: none;
  font-weight: 400;
  color: #F7CF92;
}

.wrapper-links>a:hover, .wrapper-links-social>a:hover {
  transform : scale(1.3);
}

.wrapper-login {
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 620px;
  margin: 80px 200px;
  padding: 2rem 3rem;
  gap: 30px;
  background: linear-gradient(to bottom, rgb(255,255,255,1), 60%, rgb(255,255,255,0.3)), 40%;
}

.wrapper-login>div>h1:nth-child(2) {
  font-weight: bold;
  font-size: 1rem;
}

.wrapper-login>div {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;

}

.wrapper-login>div:first-child>img {
  width: 180px;
  height: 100px;
  object-fit: contain;
}

form {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;

}

form>a {
  text-decoration: underline;
  margin-top: 2rem;
  color: #000000;
  
}
.wrapper-input {
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  display: flex;  width: 100%;

  flex-direction: row;
  width: 100%;
  padding: 0px 1rem;
}

input {
  flex: 1;
  height: 50px;
  border: none;
  font-size: 1rem;
}

input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px white inset;
}

input:focus {
  text-decoration: none;
  border: none;
  outline: none;
  background-color: #FFFFFF;
}

.btn-security {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.btn-remember {
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  gap: 0.6rem;
  padding: 0px 0.4rem;
}

.btn-submit {
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  background-color: #676668;
  color: #ffffffff;
  border: none;
}

.wrapper-remember {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

@media(max-width: 1440px) {
    .wrapper {
      padding: 4rem;
    }

    .wrapper-login {
      width: 464px;
      height: 552px;
      margin: 80px 200px;
      padding: 2rem 4rem;
      gap: 30px;
  }
}

@media(max-width: 800px) {
  .wrapper {
    align-items: center;
  }
}

@media(max-width: 500px) {
  .wrapper {
    padding: 2rem;
  }

  .wrapper-login>div:first-child>img {
    width: 120px;
    height: 60px;
    object-fit: contain;

  }

  .wrapper>div>img {
    width: 80px;
    height: 40px;
  }

  .wrapper-menu, .wrapper-links {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }

  .wrapper-links>a:hover, .wrapper-links-social>a:hover {
    transform : scale(1);
  }

  .wrapper-links>a:first-child {
     margin-right: 0px;
  }

  .wrapper-login {
    width: 100%;
    height: 360px;
    padding: 1rem;
    gap: 10px;
  }

  .wrapper-login>div {
    gap: 10px;
  }

  input {
    height: 40px;
  }

  form {
    gap: 12px;
  }
 
}

</style>

