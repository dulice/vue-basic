<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'ReactionTimer' }">Reaction Timer</router-link>
    <router-link :to="{ name: 'SignUp' }">SignUp</router-link>
  </div>
  <router-view/>
</template>
<style>
#nav {
  padding: 0 0 30px;
}
  #nav a {
    padding: 10px;
    border-radius: 3px;
    margin-left: 10px;
  }
  #nav a:hover {
    background-color: #4169e150;
    color: white;
  }
  .router-link-active {
    background-color: royalblue;
    color: white;
  }
</style>