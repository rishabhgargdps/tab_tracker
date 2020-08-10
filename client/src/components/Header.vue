<template>
    <v-app-bar dark fixed class="cyan">
        <v-toolbar flat class = "cyan">
        <v-toolbar-title class="mr-4">
            <router-link to="register">
                Tab Tracker
            </router-link>
        </v-toolbar-title>
        <!-- <v-toolbar-items>
            <v-btn flat dark class="cyan">Browse</v-btn>
        </v-toolbar-items> -->
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn v-if="!$store.state.isUserLoggedIn"
            flat dark depressed class="cyan">
                <router-link to="login">
                    Login
                </router-link>
            </v-btn>
        </v-toolbar-items>
        <v-toolbar-items>
            <v-btn v-if="!$store.state.isUserLoggedIn" 
            flat dark depressed class="cyan">
                <router-link to="register">
                    Sign Up
                </router-link>
            </v-btn>
        </v-toolbar-items>
        </v-toolbar>
    </v-app-bar>
</template>
<script>
export default {
}
</script>
<style scoped>
</style>
