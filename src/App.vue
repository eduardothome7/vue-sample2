<template>
  <div class="page-container" id="app">
    <!-- <md-app> -->
      <!-- <nav id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav> -->
      <md-toolbar class="md-large md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button">
              <md-icon>menu</md-icon>
            </md-button>
          </div>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button">
              <md-icon>refresh</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>more_vert</md-icon>
            </md-button>
          </div>
        </div>
        
        <div class="md-toolbar-row md-toolbar-offset">
          <h3 class="md-title">Title on a second row</h3>
        </div>
      
      </md-toolbar>
      <!-- <md-app-content> -->
        <router-view />
      <!-- </md-app-content> -->
    <!-- </md-app> -->
  </div>
</template>

<style lang="scss">
  .md-toolbar + .md-toolbar {
    margin-top: 16px;
  }
  .md-elevation-1 {
    width: 30%;
    padding: 1pc;
    display: inline-flex;
    margin-right: 2%;
    margin-top: 2%;
    width: 375px;
    cursor: pointer;
    padding: 1pc;
  }
  .md-elevation-1:hover {
    background: #f7f7f7;
  }
</style>
