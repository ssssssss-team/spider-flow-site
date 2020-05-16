<template>
</template>
<script>
	export default {
	    name : 'Stat',
        mounted (){
            window._mtac = {};
            var mta = document.createElement("script");
            mta.src = "//pingjs.qq.com/h5/stats.js?v2.0.4";
            mta.setAttribute("name", "MTAH5");
            mta.setAttribute("sid", "500724299");
            mta.setAttribute("cid", "500724300");
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(mta, s);
            this.$router.beforeEach((to, from, next) => {
                try{
                    MtaH5.clickStat('change',{path:to.path})
				}catch(e){

				}
                next()
            })

        }
    }
</script>