<script setup lang="ts">
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
  <v-app>
    <v-main class="main-wrapper" style="border: solid red;">
      <v-container class="d-flex-col fill-height align-start" style="border: solid black;">
        <v-container class="d-flex align-center justify-space-between">
          <img  src="/src/assets/scaeIcon.svg" alt="scae-icon"></img>
          <v-row class="align-center justify-end ga-sm-3">
            <a style="margin-right: 30px" href="https://scae.adm.br/" target="_blank">https://scae.adm.br/</a>
            <a href="https://scae.adm.br/" target="_blank"><span class="mdi mdi-facebook icon"></span></a>
            <a href="https://scae.adm.br/" target="_blank"><span class="mdi mdi-instagram icon"></span></a>
            <a href="https://scae.adm.br/" target="_blank"><span class="mdi mdi-linkedin icon"></span></a>
            <a href="https://scae.adm.br/" target="_blank"><span class="mdi mdi-youtube icon"></span></a>
          </v-row>
        </v-container>
        <v-container class="wrapper-login rounded-lg">
          <v-col class="text-center">
            <p>Seja bem-vindo(a) ao</p>
            <h4>SISTEMA PARA GESTÃO DE LOTEAMENTOS</h4>
            <img style="width: 200px; height: 100px;" src="/src/assets/novaricalIcon.png" alt="scae-icon">
          </v-col>
        </v-container>
        <v-container>
            
                    <!-- <v-container>
                      <v-form>
                        <v-row class="wrapper-input">
                          <input placeholder="Usuário" name="user" @change="(e) => changeValueInput(e)" v-bind:value="valuesSignin.user" type="text" autocapitalize={false} autocomplete={false} autofocus >
                          <span class="mdi mdi-account input-icon"></span>
                        </v-row>
                        <v-row>
                          <input v-if="isSecurity" placeholder="Senha" name="password" v-bind:value="valuesSignin.password" type="password" @change="(e) => changeValueInput(e)">
                          <input v-if="!isSecurity" placeholder="Senha" name="password" v-bind:value="valuesSignin.password" type="text" @change="(e) => changeValueInput(e)">
                          <button class="btn-security" type="button" @click="handleToggleSecurity">
                            <span class="mdi mdi-eye input-icon" v-if="!isSecurity"></span>
                            <span class="mdi mdi-eye-off input-icon" v-if="isSecurity"></span>
                          </button>
                        </v-row>
                        <v-checkbox label="Checkbox"></v-checkbox>
                        <-<v-row>
                          <v-btn type="button" @click="handleToggleRemember">
                            <span class="mdi mdi-check input-icon" v-if="!isRemember"></span>
                            <span class="mdi mdi-check input-icon" v-if="isRemember"></span>
                            Lembrar meu usuário
                          </v-btn>
                          <v-btn class="btn-submit" type="submit" @click="() => handleSubmit(valuesSignin)">
                            ENTRAR
                          </v-btn>
                        </v-row>
                        <a href="https://scae.adm.br/" target="_blank">Esqueceu sua senha?</a>
                      </v-form>
                  </v-container> -->
          </v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.main-wrapper {
  background-image: url(/src/assets//backgroundLogin2.jpg);
  background-size: cover;

  width: 100vw;
  height: 100vh;
  padding: 2rem;
}

.wrapper-login {
  width: 500px;
  height: 620px;
  margin: 80px 200px;
  background: linear-gradient(to bottom, rgb(255,255,255,1), 60%, rgb(255,255,255,0.3)), 40%;
}

a {
  text-decoration: none;
  cursor: pointer;
  text-decoration: none;
  font-weight: 400;
  color: #F7CF92;
}

.icon {
  color: #F7CF92;
  font-size: 30px;
}

.input-icon {
  color: "#676668";
  font-size: 20px;
}

a:hover {
  transform: scale(1.2);
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
/* 
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
 
} */

</style>

