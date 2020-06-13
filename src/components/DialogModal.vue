<template>
    <div class="text-center">
        <v-dialog
                v-model="dialog"
                max-width="600px"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                        color="grey"

                        v-bind="attrs"
                        v-on="on"
                >
                    Add new project
                </v-btn>
            </template>

            <v-card>
                <v-card-title
                        class="headline grey lighten-1"
                        primary-title
                >
                    <h2 class="subtitle-1 text--black"> Add a new project</h2>
                </v-card-title>

                <v-card-text>
                    <v-form class="px-3" ref="form">
                        <v-text-field label="Title" color="grey" prepend-icon="folder" :rules="inputRules" v-model="title"></v-text-field>




                        <v-textarea label="Information" color="grey" prepend-icon="edit"  :rules="inputRules" v-model="content"></v-textarea>
                        <v-spacer></v-spacer>

                        <v-menu max-width="290">

                            <template v-slot:activator="{ on }">
                                <v-text-field :value="due" label="Due date" prepend-icon="mdi-calendar-range" v-on="on"></v-text-field>
                            </template>
                            <v-date-picker  v-model="due"></v-date-picker>
                        </v-menu>

                    </v-form>

                </v-card-text>



                <v-card-actions>

                    <v-btn
                            class="mx-0 mt-3"
                            color="grey"
                            text
                            @click="submit"
                            :loading="ButtonLoader"
                    >
Add project
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import db from "../Fb";
    export default {
        data:()=>( {
            date: new Date().toISOString().substr(0, 10),
            menu1: false,
                dialog: false,
            ButtonLoader: false,
                title: '',
                content: "",
            due:null,
            inputRules: [
                v => v && v.length >= 3 || "Minimum length 3 now:"+v.length
            ]

        }),
        methods:{
            submit(){
                this.ButtonLoader=true

                if(this.$refs.form.validate()){

                   const project={
                       title:this.title,
                       content: this.content,
                       due:this.due,
                       person:"the Pavel",
                       status:"ongoing"
                   }
                   db.collection("projects").add(project).then(
                       ()=>{
                         this.due=this.content=this.title=""

                           this.dialog=false
                           this.$emit("projectAdded")

                       }
                   )

               }
                this.ButtonLoader=false

            }
        },
        computed: {
            formattedDate() {
                return this.due ? new Date(this.due).toUTCString().substring(0,16) : ''
            }
        },
        watch: {
            date () {
                this.dateFormatted = this.formatDate(this.date)
            },
            formatDate (date) {
                if (!date) return null

                const [year, month, day] = date.split('-')
                return `${month}/${day}/${year}`
            },
            parseDate (date) {
                if (!date) return null

                const [month, day, year] = date.split('/')
                return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
            },
        },
    }
</script>

