<script lang="ts">
interface Prop {
  formField: Partial<{
    username: string;
    password: string;
    usernameRules: any[];
  }>;
}
import { SubmitEventPromise } from "vuetify/lib/framework.mjs";
import * as yup from "yup";
import { AuthService } from "@/services";
export default {
  name: "auth-module",
  data(): Prop {
    return {
      formField: {
        usernameRules: [
          (value: string) =>
            yup
              .string()
              .min(6, "Username must be at least 6 characters")
              .required("Username is required")
              .validate(value),
        ],
      },
    };
  },
  methods: {
    login(data: SubmitEventPromise) {
      AuthService.getAuth(this.formField)
        .then((res) => this.$router.push("/"))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<template>
  <v-form fast-fail @submit.prevent="login">
    <v-text-field
      variant="outlined"
      v-model="formField.username"
      label="User Name"
      :rules="formField.usernameRules"
    ></v-text-field>
    {{ formField.username }}
    <v-text-field
      variant="outlined"
      v-model="formField.password"
      label="password"
    ></v-text-field>
    <a href="#" class="text-body-2 font-weight-regular">Forgot Password?</a>
    {{ formField.password }}

    <v-btn type="submit" color="primary" block class="mt-2">Sign in</v-btn>
  </v-form>
</template>
