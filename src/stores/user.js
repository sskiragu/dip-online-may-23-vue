import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            username: 'admin',
            role: 'admin',
            token: ''
        }
    },
    actions: {
        user_credentials(){
            console.log(`Username ${this.username}`);
        }
    }
});