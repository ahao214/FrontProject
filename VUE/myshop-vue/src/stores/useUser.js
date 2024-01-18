import { defineStore } from "pinia";

BASE_URL="http://localhost:5169";

cosnt useUser= defineStore("User",{
    state:()=>({
        isLoggedIn:false,
        user:({
            userId:"",
            userName:"",
            userRole:"",
            jwtVersion:"",
            exp:0
        })
    }),
    getters:{

    },
    actions:{

    }
})

export default useUser;