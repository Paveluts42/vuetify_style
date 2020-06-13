<template>
    <nav>

        <v-snackbar v-model="snackbar" :timeout="4000" top color="grey">
            <span>Awesome! You added a new project.</span>
            <v-btn text color="white" @click="snackbar=!snackbar">
                Close
            </v-btn>
        </v-snackbar>
        <v-toolbar>
            <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>

            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>Ninja</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
             <div class="text-center mr-3" >
                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                    color="grey"
                                    text

                                    v-bind="attrs"
                                    v-on="on"
                            >
                                <v-icon left>expand_more</v-icon>
                                <span>Menu</span>
                            </v-btn>

                        </template>
                        <v-list>
                            <v-list-item
                                    v-for="(link, index) in links"
                                    :key="index"
                                    router :to="link.route"
                            >
                                <v-icon left>{{link.icon}}</v-icon>
                                <v-list-item-title>{{ link.text }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>



            <v-btn class="ma-auto grey--text"  text @click="$vuetify.theme.isDark=!$vuetify.theme.isDark"> change them</v-btn>
            <v-btn text color="grey">
                <span>Sign Out</span>
                <v-icon right>mdi-export</v-icon>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer absolute
                             bottom

                             temporary v-model="drawer" class="blue-grey darken-4">
            <v-row >
<v-col class="mt-3"  align="center">
    <v-avatar color="blue-grey lighten-4" size="60"  >
        <span>PA</span>
    </v-avatar>
    <p class="white--text subtitle-1 mt-1">the Pavel</p>
</v-col>
            </v-row>
                <v-row>
                <v-col c align="center">
                    <DialogModal @projectAdded="snackbar=true"/>
                </v-col>
            </v-row>
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon class="white--text">{{link.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-subtitle>
                        <v-list-item-subtitle class="grey--text">
                            {{link.text}}
                        </v-list-item-subtitle>
                    </v-list-item-subtitle>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>


<script>
    import DialogModal from "./DialogModal";

    export default {
        data: () => ({
            drawer: false,
            links: [
                {icon: "mdi-view-dashboard", text: "Dashboard", route: '/'},
                {icon: "mdi-folder", text: "My Projects", route: '/projects'},
                {icon: "mdi-account", text: "Team", route: '/team'},
            ],
            snackbar:false


        }),
        components:{
            DialogModal
        }
    }
</script>
