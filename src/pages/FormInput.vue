<script setup>
import { ref } from "vue";
import Modal from "../components/Modal.vue";

const email = ref("");
const password = ref("");
const role = ref("fullstack");
const term = ref(false);
const skill = ref("");
const skills = ref([]);
const members = ref(["John"]);
const showModal = ref(false);

const addSkill = (e) => {
  if (e.key === "," && skill.value) {
    skills.value = [...skills.value, skill.value];
    skill.value = "";
  }
};

const deleteSkill = (skill) => {
  return skills.value.filter((el) => el !== skill);
};
const handleSubmit = (e) => {
  showModal.value = true;
};
</script>
<template>
  <form @submit.prevent="handleSubmit" action="#">
    <label for="email">Email</label>
    <input type="text" id="email" v-model="email" />

    <label for="password">Password</label>
    <input type="password" id="password" v-model="password" />

    <label for="role">Role</label>
    <select name="role" id="role" v-model="role">
      <option value="frontend">Frontend Developer</option>
      <option value="backend">backend Developer</option>
      <option value="fullstack">fullstack Developer</option>
    </select>

    <label for="skills">Skills (press alt + comma to add new skill)</label>
    <input type="text" @keyup.alt="addSkill" v-model="skill" />
    <div
      v-for="skill in skills"
      :key="skill"
      class="pill"
      @click="deleteSkill(skill)"
    >
      {{ skill }}
    </div>

    <p style="color: #999; margin-top: 10px;">Members</p>
    <div style="display: flex; gap: 30px;">
      <div>
        <input type="checkbox" value="John" id="John" v-model="members"/>
        <label for="John">John</label>
      </div>
      <div>
        <input type="checkbox" value="Jame" id="Jame" v-model="members"/>
        <label for="Jame">Jame</label>
      </div>
      <div>
        <input type="checkbox" value="Ella" id="Ella" v-model="members"/>
        <label for="Ella">Ella</label>
      </div>
    </div>

    <div>
      <input type="checkbox" id="term" v-model="term" />
      <label for="term">Accept terms and condition</label>
    </div>
    <button>Creat an account</button>
  </form>
  <Modal v-if="showModal" @close="showModal = false">
    <template v-slot:header> <h3>Your account is created</h3></template>
    <template v-slot:content>
      <div>
        <p>Email: {{ email }}</p>
        <p>Password: {{ password }}</p>
        <p>Role: {{ role }}</p>
        <p>Accept Terms: {{ term }}</p>
        <pre>skills: {{ skills }}</pre>
        <pre>Members: {{ members }}</pre>
      </div>
    </template>
  </Modal>
</template>

<style></style>
