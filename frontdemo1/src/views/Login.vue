用户名：<input type="text" v-model="state.loginData.userName"/>
密码：<input type="password" v-model="state.loginData.password"/>

<input type="submit" value="登录" @click="loginSubmit"/>


<ul >
    <li v-for="p in state.processes" :Key="p.id">
        {{p.id}} {{p.processName} {{p.workingSet}}}
    </li>
</ul>