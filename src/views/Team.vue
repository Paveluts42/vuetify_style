<template>
    <div id="Team" >
        <h1 class="subtitle-1 grey--text">this is Team page</h1>
        <v-container class="my-5">
            <v-row>
                <v-col cols="4" v-for="person in team" :key="person.name">
                    <v-card  class="text-center ma-3">
                        <v-responsive class="pt-4">
                            <v-avatar color="grey" size="80">
                                <span class="white--text headline">{{person.ava}}</span>
                            </v-avatar>
                        </v-responsive>
                        <v-card-text>
                            <div class="subtitle-1"> {{person.name}}</div>
                            <div class="grey--text">
                                {{person.role}}
                            </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn text color="grey">
                                <v-icon right>message</v-icon>
                                <span> Message</span>

                            </v-btn>

                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>

        </v-container>
    </div>
</template>
<script>
    export default {
        data: () => ({
            team: [
                {name: 'The Net Ninja', role: 'Web developer' ,ava:"PL"},
                {name: 'Ryu', role: 'Graphic designer',ava:"BU"},
                {name: 'Chun Li', role: 'Web developer',ava:"KB"},
                {name: 'Gouken', role: 'Social media maverick',ava:"BB"},
                {name: 'Yoshi', role: 'Sales guru',ava:"LA"},
            ]
        })
    }
</script>
