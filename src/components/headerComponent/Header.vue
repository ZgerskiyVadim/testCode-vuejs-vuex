<template>
    <div>
        <header>
            <div class="header">
                <div class="routersLinks">
                    <div class="routerLink">
                        <router-link to="/">
                            <p>Главная</p>
                        </router-link>
                    </div>

                    <div class="routerLink">
                        <router-link to="/contacts">
                            <p>Контакты</p>
                        </router-link>
                    </div>

                </div>
                <div></div>

                <DropDown></DropDown>

            </div>
        </header>
    </div>
</template>

<script>
    import DropDown from './DropDown.vue'
    export default{
        data(){
            return{
                show: false
            };
        },
        components: {DropDown}
    }
</script>

<style>
    header {
        padding: 0;
    }
    .header {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .routersLinks {
        display: flex;
    }
    .routerLink {
        margin-left: 10px;
    }

</style>
